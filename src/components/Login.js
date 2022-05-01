import { useState } from "react";

export default function Login(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  function loginGo() {
    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userName: "michael.arce",
        password: "1234",
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Logged In") {
          return setIsAuthenticated(true);
        } else {
          return false;
        }
      })
      .catch((err) => {
        console.error("Login Error: ", err);
      });
  }
  return (
    <button
      onClick={(e) => {
        loginGo(e.target.value);
      }}
    >
      Login
    </button>
  );
}
