import React from "react";
import "./Search.css";
import { Loading } from "component-craftsman";
import { AuthContext } from "../../AuthContext";
import axios from "axios";
import { BASE_API } from "../../config";
import { UserImage } from "../../assets";
import { Tooltip } from "antd";
import { Icons } from "../../icons";
import { theme } from "../rawdata";
import { Link } from "react-router-dom";

const Search = () => {
  const [isData, setIsData] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState("");
  const [doctorsData, setDoctorsData] = React.useState([]);
  const { setModal2Open, setModelType, setModelMessgae } =
    React.useContext(AuthContext);

  const handleSeatrchKey = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchKey.trim() || searchKey.length > 30) {
      setModelType("Error");
      setModelMessgae("Search field is empty! write correct term to search");
      setModal2Open(true);
      return;
    }
    setLoading(true);
    setDoctorsData([]);
    try {
      const response = await axios.post(`${BASE_API}/doctor/search`, {
        query: searchKey.trim(),
      });
      if (response.data.success) {
        setDoctorsData(response.data.doctors);
      } else {
        setModelType("Error");
        setModelMessgae("Search failed.");
        setModal2Open(true);
      }
    } catch (error) {
      console.log("failed to fetch the doctors:", error);
      setModelType("Error");
      setModelMessgae(error.response.data.message || "Somethin went wrong");
      setModal2Open(true);
    } finally {
      setLoading(false);
      setIsData(true);
    }
  };

  return (
    <section>
      <div className="search">
        <div className="searchmain">
          <div className="search-input-container">
            <form className="form-wrapper cf" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search here..."
                value={searchKey}
                onChange={handleSeatrchKey}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
        {loading && (
          <div className="d-flex justify-content-center">
            <Loading label="loading" loading={4} />
          </div>
        )}
        {isData && (
          <div className="container">
            <hr />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Details</th>
                  <th>Doctor Specification</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through the data array */}
                {doctorsData.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>
                      <img
                        src={doctor?.personal?.image || UserImage}
                        alt={doctor.name}
                        height={80}
                        width={80}
                        className=" object-fit-cover"
                      />
                    </td>
                    <td>
                      <div>
                        <span>{doctor.email}</span> <br />
                        <span>{doctor.name}</span>
                      </div>
                    </td>
                    <td>{doctor.hospital.specialization}</td>
                    <td>
                      <Tooltip title={`View ${doctor?.name?.trim()}'s profile`}>
                        <Link
                          to={`/doctor/${doctor._id}`}
                          className="btn text-white"
                          style={{ backgroundColor: theme }}
                        >
                          {Icons.RemoveRedEyeIcon}
                        </Link>
                      </Tooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
