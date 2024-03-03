import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
