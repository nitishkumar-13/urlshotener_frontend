import axios from "axios";
import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import Redirect from "../components/Redirect";

const CreateUrl = () => {
  const [createdURL, setCreatedURL] = useState("");
  const initialValues = { longUrl: "" };
  const email = localStorage.getItem("email") || "";

  const validationSchema = Yup.object({
    longUrl: Yup.string().required("Url is required"),
  });

  const onSubmit = async (values) => {
    try {
      let res = await axios.post(
        "https://url-shortener-backend-ok26.onrender.com/api/url/createURL",
        {
          ...values,
          email,
        }
      );
      if (res.status === 200) {
        setCreatedURL(res.data.data);
        toast.success(res.data.message);
        formik.values.longUrl = "";
      }
    } catch (error) {
      toast.error("Server error");
      console.log(error.response);
    }
  };

  const handleClick = async (id) => {
    await axios.post(
      "https://url-shortener-backend-ok26.onrender.com/api/url/click-count",
      { id }
    );
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      {email !== "" ? (
        <>
          <Navbar />
          <div className="container p-5 my-5 rounded">
            <h1 className="text-center mb-5">URL Shortener</h1>
            <form
              className="my-5 p-5 text-dark bg-light"
              onSubmit={formik.handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="longUrl" className="form-label">
                  Full Url
                </label>
                <input
                  placeholder="Enter your url"
                  type="text"
                  className="form-control"
                  id="longUrl"
                  name="longUrl"
                  value={formik.values.longUrl}
                  onChange={formik.handleChange}
                />
                <div className="text-danger">{formik.errors.longUrl}</div>
              </div>

              <div className="d-grid mt-5">
                <button type="submit" className="btn btn-success">
                  Shrink
                </button>
              </div>
            </form>

            <h1>
              {/* <a href={}></a> */}
              Your generated short Id is{" "}
              <a
                href={createdURL.longUrl}
                target="_blank"
                onClick={() => handleClick(createdURL.urlId)}
              >
                {createdURL.shortUrl}
              </a>
            </h1>
          </div>
        </>
      ) : (
        <Redirect />
      )}
    </div>
  );
};

export default CreateUrl;
