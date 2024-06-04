import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email()
      .matches(/^(?!.*@[^,]*,)/)
      .required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
    role: Yup.string().required("Role is required"),
  });

  const onSubmit = async (values) => {
    try {
      let res = await axios.post(
        "https://url-shortener-backend-ok26.onrender.com/api/user/register",
        values
      );

      if (res.status === 201) {
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("User already Exists");
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div
      className=" mx-auto p-5 mt-5 rounded-3 bg-dark"
      style={{ width: "500px" }}
    >
      <h1 className="text-center mb-4 text-light">Register User</h1>
      <form
        className="p-5 bg-light w-100 mx-auto rounded-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstName"
            placeholder="Enter your first name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.firstName}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastName"
            placeholder="Enter your Lastname"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.lastName}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.email}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.password}</span>
        </div>

        <div className="mb-3">
          <select
            id="role"
            name="role"
            className="form-select"
            value={formik.values.role}
            onChange={formik.handleChange}
          >
            <option>Choose your Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <span className="text-danger">{formik.errors.role}</span>
        </div>

        <div className="d-grid ">
          <button type="submit" className="btn btn-success mt-3">
            Register
          </button>
        </div>

        <div className="mt-3">
          <span className="text-muted">
            Already have an account ?{" "}
            <Link
              to="/"
              className="link-primary text-decoration-underline"
              style={{ color: "blue" }}
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
