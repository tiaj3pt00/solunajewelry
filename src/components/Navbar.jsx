import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
      {/* Brand Logo */}
      
      <Link to="/" className="navbar-brand fw-bold">
        Soluna<span className="text-info">Jewelry</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <b>
              <Link to="/" className="nav-link">
                Glance at Jewelry
              </Link>
            </b>
          </li>
          <li className="nav-item">
            <b>
              <Link to="/addjewelry" className="nav-link">
                Sell Jewelry
              </Link>
            </b>
          </li>
        </ul>

        {/* Authorization Links (Aligned Right) */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <b>
              <Link to="/aboutus" className="nav-link">
                About us
              </Link>
            </b>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="btn btn-outline-info me-2">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-info">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
