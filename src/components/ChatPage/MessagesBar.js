import React, { useState, useEffect } from "react";
import "./MessagesBar.scss";
import { socket } from "../../service/socket";

export const MessagesBar = (props) => {
  const [messages, setMessages] = useState([]);
  const [messagesRef, setMessagesRef] = useState(null);
  const [id, setId] = useState(socket.id);

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
      // const firstMessage = messagesRef.children[0]; // username + text + time
      // const firstUsername = firstMessage.children[0].children[0];

      // console.log(firstUsername);
      // if (firstUsername.innerText === "Cyberchat") {
      //   firstUsername.style = "color:rgb(160,250,160)";
      // }
      const lastMessage = messagesRef.children[messagesRef.children.length - 1];

      lastMessage.classList.toggle("animation-new-message");
      // firstMessage.style.color = "#fff";

      setTimeout(() => {
        lastMessage.classList.toggle("animation-new-message");
      }, 550);
    }
  }, [messages]);

  const renderMessages = () => {
    const messagesList = messages.map((message, index) => {
      let specialStyling = "";
      let isCyberchat = message.username === "Cyberchat" ? true : false;
      let isCurrentUser = message.id === id ? true : false;

      specialStyling = "rgb(255, 235, 255)";
      if (isCyberchat) specialStyling = "rgb(160, 250, 160)";
      if (isCurrentUser) specialStyling = "rgb(5, 150, 250)";

      return (
        <li key={index} className="message">
          <section>
            <p className="message__username" style={{ color: specialStyling }}>
              {message.username}{" "}
            </p>
            <p className="message__time"> {message.time}</p>
          </section>

          <p className="message__text"> {message.text}</p>
        </li>
      );
    });

    return messagesList;
  };

  return (
    <div className="messages-bar">
      <label className="messages-bar__header">Messages</label>
      <div className="messages-bar__list-wrapper">
        <ul
          className="messages-bar__list"
          ref={(el) => {
            setMessagesRef(el);
          }}
        >
          {messages && renderMessages()}
        </ul>
      </div>
    </div>
  );
};
