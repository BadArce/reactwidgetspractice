import { BrowserRouter, Route, useLocation, Routes, Link } from "react-router-dom";
import { useState } from "react";

import './styles/App.css';
import './styles/common.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
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
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  

  const AuthenticatedRoutes = () => {
    return(
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/hidden" element={<Hidden />} />
        <Route path="/resize" element={<Resize />} />
        <Route path="/align" element={<Alignment />} />
        <Route path="/color" element={<Color />} />
        <Route path="/exponents" element={<Exponents />} />
        <Route path="/swapi" element={<Swapi />} />
      </Routes>
    )
  }

  function GoBack(){
    const location = useLocation();
    if (location.pathname !== "/"){
      return(
      <div>
        <Link to="/"><button className="return-button">Go Back</button></Link>
      </div>
    )}
  }

  return (
    <div className="App">
      <BrowserRouter>
        {!isAuthenticated && <Route path="/" element={<Login />} />}
        {isAuthenticated && <Navbar />}
        <GoBack />
        {isAuthenticated && <AuthenticatedRoutes />}
      </BrowserRouter>
    </div>
  );
}

export default App;
