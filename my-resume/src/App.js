
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Layout">
        <Sidebar/>
        <MainContent/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;


