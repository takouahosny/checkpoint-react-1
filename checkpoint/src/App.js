import logo from './logo.svg';
import './App.css';
import Desk from './components/Desk';
import Img from './components/Img';
import Name from './components/Name';
import Price from './components/Price';

function App() {
  return (
    <nav className="App">
      <Desk />
      <Img />
      <Name />
      <Price/>
    </nav>
  );
}

export default App;
