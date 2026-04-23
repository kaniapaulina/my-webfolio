
import './App.css';

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
          </div>
      </div>
    </div>
  );
}

export default App;


