import logo from './logo.svg';
import './App.css';
import NavBar from './components/header/NavBar';
import { Search } from './components/header/Search';

function App() {
  return (
    <div className="App">
      <Search />
      <NavBar />
    </div>
  );
}

export default App;
