import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <div className="container my-5 text-center">
      <h1>You are not authenticated,Please login first</h1>
      <Link to="/">
        <button className="btn btn-dark">Login</button>
      </Link>
    </div>
  );
};

export default Redirect;
