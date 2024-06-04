import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Redirect from "../components/Redirect";

const AllUrl = () => {
  const [tableDataToday, setTableDataToday] = useState([]);
  const [allURL, setallURL] = useState([]);
  const email = localStorage.getItem("email") || "";

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.post(
        "https://url-shortener-backend-ok26.onrender.com/api/url/all-urls",
        {
          email,
        }
      );
      setallURL(res.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.post(
        "https://url-shortener-backend-ok26.onrender.com/api/url/today",
        {
          email,
        }
      );
      setTableDataToday(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {email !== "" ? (
        <>
          <Navbar />
          <div className="container">
            <h3 className="my-5">Total URL created by user:{allURL.length}</h3>
            <h1 className="my-5 text-center">All Url's created by user</h1>
            <table className="table table-striped table-hover table-responsive ">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Full URL</th>
                  <th>Short URL</th>
                </tr>
              </thead>
              <tbody>
                {allURL.map((item, index) => (
                  <tr key={index}>
                    <td>{format(new Date(item.createdAt), "dd/MM/yyyy")}</td>
                    <td>
                      <a href={item.longUrl} target="_blank">
                        {item.longUrl}
                      </a>
                    </td>
                    <td>
                      <a href={item.longUrl} target="_blank">
                        {item.shortUrl}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="my-5">
              Total URL created by user today:{tableDataToday.length}
            </h3>
            <h1 className="text-center my-5">
              All Url's created by user today
            </h1>
            <table className="table table-striped table-hover table-responsive">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Full URL</th>
                  <th>Short URL</th>
                </tr>
              </thead>
              <tbody>
                {tableDataToday.map((item, index) => (
                  <tr key={index}>
                    <td>{format(new Date(item.createdAt), "dd/MM/yyyy")}</td>
                    <td>
                      <a href={item.longUrl} target="_blank">
                        {item.longUrl}
                      </a>
                    </td>
                    <td>
                      <a href={item.longUrl} target="_blank">
                        {item.shortUrl}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <Redirect />
      )}
    </div>
  );
};

export default AllUrl;
