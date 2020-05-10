import React, { useState, useEffect } from "react";
import "./Messages.scss";
import { socket } from "../../service/socket";

export const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const [messagesRef, setMessagesRef] = useState(null);

  useEffect(() => {
    if (messagesRef) {
      messagesRef.scrollTop = messagesRef.scrollHeight;
    }
  });

  useEffect(() => {
    setMessages(props.messages);
  }, [props.messages]);

  useEffect(() => {
    if (messagesRef && messagesRef.children.length) {
      const lastMessage = messagesRef.children[messagesRef.children.length - 1];

      lastMessage.classList.toggle("animation-new-message");

      setTimeout(() => {
        lastMessage.classList.toggle("animation-new-message");
      }, 550);
    }
  }, [messages]);

  const renderMessages = () => {
    /* Set styling for displaying messages depending on their source 
      - other users are white-ish
      - cyberchat is green-ish
      - current user is blue-ish
      ALSO don't display hours because messages from server (Cyberchat) deployed on Heroku will show different local time
    */

    const messagesList = messages.map((message, index) => {
      let isCyberchat = message.username === "Cyberchat" ? true : false;
      let isCurrentUser = message.id === socket.id ? true : false;

      let specialColor = "rgb(245, 225, 245)";
      if (isCyberchat) specialColor = "rgb(160, 250, 160)";
      if (isCurrentUser) specialColor = "rgb(5, 150, 250)";

      const displayTime = !isCyberchat ? message.time : "";

      return (
        <li key={index} className="message">
          <section>
            <p
              className="message__username"
              style={{
                color: specialColor,
              }}
            >
              {message.username}
            </p>
            <p className="message__time"> {displayTime}</p>
          </section>

          <p className="message__text"> {message.text}</p>
        </li>
      );
    });

    return messagesList;
  };

  return (
    <div className="Messages">
      <div className="Messages__list-container">
        <ul
          className="Messages__list"
          ref={(el) => {
            setMessagesRef(el); // Ref used for scrolling to last message
          }}
        >
          {messages && renderMessages()}
        </ul>
      </div>
    </div>
  );
};
