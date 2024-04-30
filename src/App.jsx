

import { Routes , Route, Link} from 'react-router-dom'
import './App.css'
import CyberSecurity from './pages/CyberSecurity'
import DataScience from './pages/DataScience'
import All from './pages/All'
import FullStack from './pages/FullStack'

function App() {

  function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show-menu');
  }
  

  return (
    <div className="container">
      <div className="container">
  <nav>
    <div className="navbar-toggle" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <ul className="menu">
      <li><Link to="/" className="list">All</Link></li>
      <li><Link to="/full-stack" className="list">Full Stack Development</Link></li>
      <li><Link to="/data-science" className="list">Data Science</Link></li>
      <li><Link to="/cyber-security" className="list">Cyber Security</Link></li>
      <li><Link to="https://www.guvi.in/current-openings" className="list">Careers</Link></li>
    </ul>
  </nav>
</div>

   
      <Routes>
        <Route path="/" element={<All />} id='all'/>
        <Route path="/full-stack" element={<FullStack />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        
      </Routes>
    </div>
  );
}

export default App
