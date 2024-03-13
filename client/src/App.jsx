import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import OneProfile from "./components/OneProfile";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div
          className="content border"
          style={{ height: "90vh", overflowY: "auto" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/profiles/:id" element={<OneProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
