import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput("");
    console.log(searchInput);
    //fetch db
  };
  return (
    <>
      <nav className="p-3 container-fluid navbar navbar-expand-md">
        <>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" aria-current="page" to="/">
            SK Profiling
          </Link>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  Profiles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  Auth
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className="btn btn-outline-success">Search</button>
            </form>
          </div>
        </>
      </nav>
    </>
  );
};

export default Navbar;
