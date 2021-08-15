import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);

        console.log(users);
      });
  }, []);

  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col">
          <h1>Display Random Users in List Format</h1>
          <ul className="list-group d-flex">
            {users.map((user, index) => {
              return (
                <li
                  className="list-group-item bg-light mb-2"
                  key={user.login.uuid}
                >
                  <img
                    className="img-fluid img-thumbnail m-2"
                    src={user.picture.thumbnail}
                    alt=""
                  ></img>
                  <>
                    {user.name.title}.&nbsp;{user.name.first}&nbsp;
                    {user.name.last}
                  </>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
