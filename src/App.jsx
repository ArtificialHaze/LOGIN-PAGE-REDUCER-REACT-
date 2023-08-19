import React, { useState } from "react";
import "./App.scss";
import { useAuth } from "./useAuth";

const App = () => {
  const { state, dispatch } = useAuth();

  const [username, setUsername] = useState("");

  const login = () => {
    const user = { id: 1, username: username };
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
  };

  return (
    <div className="app content">
      {state.isAuthenticated ? (
        <div className="flex gap-5">
          <div>
            <h2>{state.user?.username} is authenticated successfully.</h2>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      ) : (
        <div className="m-10">
          <h1>User isn't authenticated yet.</h1>
          <input
            className="h-10 w-30 mt-5 focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="User.."
          />
          <button
            className={"border-none bg-blue-400 p-2 h-10 w-30 rounded-none"}
            onClick={login}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
