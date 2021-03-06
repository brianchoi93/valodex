import './App.css';
import Main from './components/Main';
import AgentClass from './components/AgentClass';
import Duelist from './components/Duelist';
import Initiator from './components/Initiator';
import Sentinel from './components/Sentinel';
import Controller from './components/Controller';
import Weapons from './components/Weapons';
import Maps from './components/Maps';
import SearchMap from './components/SearchMap';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header>
        <h1>
          <Link to="/"><img className="title" src="valodex-header.png" alt="Valodex" /></Link>
        </h1>
        <ul id="navbar">
          <Link to="/"><li className="navlist">Home</li></Link>
          <Link to="/agentclass"><li className="navlist">Agent Class</li></Link>
          <Link to="/weapons"><li className="navlist">Weapons</li></Link>
          <Link to="/maps"><li className="navlist">Maps</li></Link>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/agentclass" element={ <AgentClass/> } />
          <Route path="/agentclass/duelist" element={ <Duelist /> } />
          <Route path="/agentclass/initiator" element={ <Initiator /> } />
          <Route path="/agentclass/sentinel" element={ <Sentinel /> } />
          <Route path="/agentclass/controller" element={ <Controller />} />
          <Route path="/weapons" element={ <Weapons /> } />
          <Route path="/maps" element={ <SearchMap /> } />
          <Route path="/maps/:id" element={ <Maps />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
