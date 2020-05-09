import React from "react";
import { Header } from "../Header/Header";
import panorama from "../JoinPage/panorama.png";
import { SideBar } from "./SideBar";
import { MessagesBar } from "./MessagesBar";
import { NewMessageBar } from "./NewMessageBar";
import "./ChatPage.scss";
import { Link, HashRouter } from "react-router-dom";
import moment from "moment";
import { Button } from "../Button/Button";
import ifvisible from "ifvisible.js";

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
      console.log(">>>>>", message);

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

    // if (this._isMounted) {
    //   ifvisible.setIdleDuration(120);
    //   ifvisible.on("idle", () => {
    //     // socket.emit("disconnect");
    //     socket.disconnect();
    //     this.setState({ connected: false });
    //   });
    // }
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
            <SideBar
              id={this.state.id}
              username={this.state.username}
              room={this.state.room}
              users={this.state.users}
            />
            <MessagesBar messages={this.state.messages} />
            <NewMessageBar username={this.state.username} />
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
