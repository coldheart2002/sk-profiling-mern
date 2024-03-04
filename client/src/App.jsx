import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
