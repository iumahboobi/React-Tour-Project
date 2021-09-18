import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // 1. useState  and useEffect

  const [users, setUsers] = useState([]);

  // 2. Fetching Data

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    //  3. Adding our users we get from fetching data into setUser
    setUsers(users);
  };

  // 4. getUsers function using useEffect

  useEffect(() => {
    getUsers();
  }, []);

  // 5. Remove User

  const remUser = (id) => {
    const remItem = users.filter((user) => user.id !== id);
    setUsers(remItem);
  };

  // 6. displaying in UI

  return (
    <>
      <h2>Git Hub Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>

                <div>
                  <button className="btn" onClick={() => remUser(id)}>
                    Delete
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="btn" onClick={() => setUsers([])}>
        Remove Complete List
      </button>
    </>
  );
};

export default UseEffectFetchData;
