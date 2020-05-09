import "./SideBar.scss";
import React, { useState, useEffect } from "react";
import { socket } from "../../service/socket";

export const SideBar = (props) => {
  const [username, setUsername] = useState("Elo");
  const [room, setRoom] = useState("");
  const [id, setId] = useState(socket.id);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsername(props.username);
    setRoom(props.room);
    setUsers(props.users);
  }, [props.username, props.room, props.users]);

  const renderUsers = () => {
    if (users) {
      const listUsers = users.map((user, index) => {
        if (user.id !== id) return <li key={index}>{user.username}</li>;
      });
      return <ul className="users-info__list">{listUsers}</ul>;
    }

    return <p className="users-info__list">{users.length}</p>;
  };

  return (
    <div className="sidebar">
      <label className="sidebar__header">Status</label>

      <section className="user-info">
        <div className="user-info__wrapper">
          <i className="icon eye"></i>
          You:
          <p className="user-info__name">{username}</p>
        </div>
      </section>

      <section className="users-info">
        <i className="icon cube"></i> Other users:
        {renderUsers()}
      </section>
    </div>
  );
};
