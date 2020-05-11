import React from "react";
import { Header } from "../Header/Header";
import panorama from "../JoinPage/panorama.png";
import { SideBar } from "./SideBar";
import { Messages } from "./Messages";
import { MessagingBar } from "./MessagingBar";
import "./ChatPage.scss";
import { Link, HashRouter } from "react-router-dom";
import moment from "moment";
import { Button } from "../Button/Button";
// import ifvisible from "ifvisible.js";

import { socket } from "../../service/socket";

export default class ChatPage extends React.Component {
  _isMounted = false;

  state = {
    connected: false,
    username: "",
    id: "",
    messages: [],
    users: [],
    room: "",
  };

  componentDidMount() {
    this._isMounted = true;

    socket.on("SERVER_MESSAGE", (message) => {
      if (this._isMounted) {
        if (this.state.messages) {
          let newMessages = [...this.state.messages, message];
          this.setState({ messages: newMessages });
        } else {
          this.setState({ messages: [message] });
        }
      }
    });

    // Get room and users
    socket.on("ROOM_USERS", ({ room, users }) => {
      if (this._isMounted) {
        this.setState({ room, users });
      }
    });

    socket.on("SERVER_REGISTER", (message) => {
      if (this._isMounted) {
        this.setState({
          username: message.username,
          id: message.id,
          connected: true,
        });

        if (this.state.messages) {
          let newMessages = [...this.state.messages, message.botMessage];
          this.setState({ messages: newMessages });
        } else {
          this.setState({
            messages: [message.botMessage],
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  sendMessage = (msg) => {
    socket.emit("USER_MESSAGE", {
      username: this.state.username,
      text: msg,
      time: moment().format("h:mm:ss"),
    });
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="chat">
        <div className="chat__bg">
          <img
            alt="city"
            className="panorama__image panorama__image--chat"
            id="panoramaImage"
            src={panorama}
          />
        </div>
        <Header />

        {this.state.connected ? (
          <div className="chat__board">
            {/* <Button
              text={"Users"}
              classes={"users-list-button animation-delayed-appear"}
            /> */}
            <SideBar
              username={this.state.username}
              room={this.state.room}
              users={this.state.users}
            />
            <Messages messages={this.state.messages} />
            <MessagingBar username={this.state.username} />
          </div>
        ) : (
          <HashRouter basename="/">
            <Link to="/">
              <Button
                text={"Back"}
                classes={"home-button animation-delayed-appear"}
              />
            </Link>
          </HashRouter>
        )}
      </div>
    );
  }
}
