import './styles/App.css';
import './styles/common.css';
import Navbar from "./components/Navbar"
import Counter from "./widgets/Counter"
import Greeting from "./widgets/Greeting"
import Hidden from "./widgets/Hidden"
import Resize from "./widgets/Resize"
import Alignment from "./widgets/Alignment"
import Color from "./widgets/Color"
import Exponents from "./widgets/Exponents"


function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <Counter />
      <hr />
      <Greeting />
      <hr />
      <Hidden />
      <hr />
      <Resize />
      <hr />
      <Alignment />
      <hr />
      <Color />
      <hr />
      <Exponents />
    </div>
  );
}

export default App;
