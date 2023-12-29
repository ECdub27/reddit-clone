import logo from './logo.svg';
import './App.css';
import Header from './Features/Header/header';
import Subreddits from './Features/Subreddits/subreddits';
import Home from './Features/Home/home';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Header />
      </header>
<main>

  <Home/>
  <aside>
  <Subreddits/>
  </aside>
</main>
    </div>
  );
}

export default App;
