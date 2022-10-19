
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, Crew, Destination, Technology } from "./components";
import './components/style.css'
const App = () => {
  

  return (
    <BrowserRouter>
    <div className="container">
      <div className="navbar">
      <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;
