import logo from './logo.svg';
import './App.css';
import Header from './Features/Header/header';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Header />
      </header>
    </div>
  );
}

export default App;
