
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import Details from './pages/Details';
import Home from "./pages/Home";
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/details/:serviceName' element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
