import { Link } from "react-router-dom";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          DashBoard
          <i className="ms-2 fa-solid fa-house"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="link " to="/create-url">
              <a className="nav-link">CreateShort URL</a>
            </Link>
            <Link className="link " to="/all-url">
              <a className="nav-link">All Url</a>
            </Link>
            <Link className="link " to="/monthly-url">
              <a className="nav-link">Monthly Url</a>
            </Link>
            <Link className="link" to="/" onClick={handleLogout}>
              <a className="nav-link">
                Logout
                <i className="ms-2 fa-solid fa-right-from-bracket"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
