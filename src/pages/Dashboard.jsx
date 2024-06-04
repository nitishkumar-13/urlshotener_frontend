import Navbar from "../components/Navbar.jsx";
import Redirect from "../components/Redirect.jsx";

const Dashboard = () => {
  const fname = localStorage.getItem("fname") || "";
  const lname = localStorage.getItem("lname") || "";
  const email = localStorage.getItem("email") || "";
  return (
    <div>
      {email !== "" ? (
        <>
          <Navbar />
          <h1 className="text-center mt-5">
            Welcome to dashboard {fname + " " + lname}
          </h1>
        </>
      ) : (
        <Redirect />
      )}
    </div>
  );
};

export default Dashboard;
