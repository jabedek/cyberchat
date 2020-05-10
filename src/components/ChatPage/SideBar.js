import "./SideBar.scss";
import React, { useState, useEffect } from "react";
import { socket } from "../../service/socket";

export const SideBar = (props) => {
  const [username, setUsername] = useState("Elo");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsername(props.username);
    setUsers(props.users);
  }, [props.username, props.users]);

  const renderUsers = () => {
    if (users) {
      const listUsers = users.map((user, index) => {
        if (user.id !== socket.id)
          return (
            <li className="userElement" key={index}>
              {user.username}
            </li>
          );
      });
      return <ul className="users__list">{listUsers}</ul>;
    }

    return <p className="users__list">{users.length}</p>;
  };

  return (
    <div className="SideBar">
      <label className="SideBar__header">Status</label>

      <section className="user">
        <div className="user__wrapper">
          <i className="icon eye"></i>
          You:
          <p className="user__name">{username}</p>
        </div>
      </section>

      <section className="users">
        <span className="my-icon">
          <i className="icon cube"></i>
        </span>
        Other users:
        {renderUsers()}
      </section>
    </div>
  );
};
