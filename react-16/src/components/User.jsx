import React, { useEffect, useState } from "react";
import Axios from "axios";

let User = () => {
  let [users, setUser] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUser(response.data);
    });
  }, []);
  return (
    <>
      <pre>{JSON.stringify(users)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className="table table-hover table-dark bg-dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {users.length !== 0 ? (
                  <>
                    {users.map((user) => {
                      return (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>

                          <td>{user.email}</td>
                          <td>{user.address.city}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default User;
