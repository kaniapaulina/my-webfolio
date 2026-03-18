
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-Content">
        <Sidebar/>
        <MainContent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

{/*
  {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    */}

