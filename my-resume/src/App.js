
import './App.css';

import { Fragment } from "react";
import ScrollButton from "./components/ScrollButton";
import { Content, Heading } from "./components/Styles";

import Header from './components/Header';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="Inner-App">
          <Header/>
          <div className="Layout">
            <Sidebar/>
            <MainContent/>
            <ScrollButton/>
          </div>
      </div>
    </div>
  );
}

export default App;


