import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import Redirect from "../components/Redirect";

const MonthlyURL = () => {
  const [monthlyData, setMonthlyData] = useState([]);
  const email = localStorage.getItem("email") || "";

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios.post(
        "https://url-shortener-backend-ok26.onrender.com/api/url/monthly",
        {
          email,
        }
      );
      setMonthlyData(res.data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {email !== "" ? (
        <>
          <Navbar />
          <div className="container">
            <h3 className="my-5">
              Total URL created by user this month:{monthlyData.length}
            </h3>
            <h1 className="my-5 text-center">All Url</h1>
            <table className="table table-striped table-hover table-responsive ">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Full URL</th>
                  <th>Short URL</th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((item, index) => (
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

export default MonthlyURL;
