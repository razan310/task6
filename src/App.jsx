import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // استخدم BrowserRouter هنا
import './App.css';
import { DarkModeProvider } from './Components/DarkModeContext/DarkModeContext';
import NavBar from './Components/NavBar/NavBar';
import { navItems } from './Data/navBarData';
import Home from './pages/Home';
import Newlatters from './pages/Newlatters'
import Article from './pages/Article';

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <NavBar 
          logo={navItems.logo} 
          items={navItems.items}  
          sun={navItems.sun} 
          moon={navItems.moon} 
          btn={navItems.btn} 
          menu_outline={navItems.menu_outline}
        />
        <Routes>
          <Route path="/task6" element={<Home />} />
          <Route path="/Newsletter" element={<Newlatters />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
        
      </Router>
    </DarkModeProvider>
  );
}

export default App;
