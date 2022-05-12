import {
  BrowserRouter,
  Route,
  useLocation,
  Routes,
  Link,
} from "react-router-dom";
import { useState } from "react";

import "./styles/common.css";
import Dashboard from "./components/Dashboard";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Counter from "./widgets/Counter";
import Greeting from "./widgets/Greeting";
import Hidden from "./widgets/Hidden";
import Resize from "./widgets/Resize";
import Alignment from "./widgets/Alignment";
import Color from "./widgets/Color";
import Exponents from "./widgets/Exponents";
import Swapi from "./widgets/Swapi";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const AuthenticatedRoutes = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/hidden" element={<Hidden />} />
        <Route path="/resize" element={<Resize />} />
        <Route path="/align" element={<Alignment />} />
        <Route path="/color" element={<Color />} />
        <Route path="/exponents" element={<Exponents />} />
        <Route path="/swapi" element={<Swapi />} />
      </Routes>
    );
  };
  async function loginGo(uN, pW) {
    await fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userName: uN,
        password: pW,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          setIsAuthenticated(true);
          return;
        } else {
          console.log("Incorrect username/password.");
        }
      })
      .catch((err) => {
        console.error("Login Error: ", err);
        return <h2>Sorry, please try again</h2>;
      });
  }
  function GoBack() {
    const location = useLocation();
    if (location.pathname !== "/") {
      return (
        <div>
          <Link to="/">
            <button className="return-button">Go Back</button>
          </Link>
        </div>
      );
    }
  }
  function LogOut() {
    async function logOutAPI() {
      await fetch(
        "https://devpipeline-mock-api.herokuapp.com/api/auth/logout",
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Logged out") {
            setIsAuthenticated(false);
          }
        })
        .catch((err) => {
          console.error("Login Error: ", err);
        });
    }

    return (
      <div>
        <button className="log-out-button" onClick={() => logOutAPI()}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        {!isAuthenticated && (
          <form className="login-wrapper" onSubmit={() => loginGo(name, pass)}>
            <label>
              Username:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </label>
            <input type="submit" value="Log In" />
          </form>
        )}
        {isAuthenticated && <Navbar />}
        <GoBack />
        {isAuthenticated && <AuthenticatedRoutes />}
        {isAuthenticated && <LogOut />}
      </BrowserRouter>
    </div>
  );
}

export default App;
