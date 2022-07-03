import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Personajes from './pages/Personajes';
import Ubicaciones from './pages/Ubicaciones';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Personajes />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
