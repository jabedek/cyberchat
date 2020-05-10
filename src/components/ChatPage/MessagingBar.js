import React from "react";
import { Button } from "../Button/Button";
import "./MessagingBar.scss";
import moment from "moment";
import { socket } from "../../service/socket";

export class MessagingBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", username: props.username, time: null };
  }

  sendMessage = () => {
    socket.emit("USER_MESSAGE", {
      username: this.state.username,
      text: this.state.text,
      time: moment().format("h:mm:ss"),
      id: socket.id,
    });
    this.setState({ message: "" });
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="MessagingBar">
        <form className="MessagingBar__form" id="message__form">
          <textarea
            id="msg"
            type="text"
            placeholder="Enter a message"
            value={this.state.text}
            name="message"
            autoComplete="off"
            spellCheck="false"
            className="MessagingBar__input "
            onChange={(event) => {
              this.setState({ text: event.target.value });
            }}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.shiftKey === false) {
                e.preventDefault();
                if (this.state.text) {
                  this.sendMessage();
                }
              }
            }}
          />
          <Button
            handleClick={() => {
              if (this.state.text) {
                this.sendMessage();
              }
            }}
            text={">"}
            classes={"MessagingBar__button"}
          />
        </form>
      </div>
    );
  }
}
