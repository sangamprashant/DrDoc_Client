import React from "react";
import "./Search.css";
import { Loading } from "component-craftsman";
import { AuthContext } from "../../AuthContext";

// Sample data array
const doctorsData = [
  {
    id: 1,
    imageSrc: "doctor1.jpg",
    email: "email1@gmail.com",
    name: "Doctor 1",
    specialization: "Orthopedic Surgeon",
  },
  {
    id: 2,
    imageSrc: "doctor2.jpg",
    email: "email2@gmail.com",
    name: "Doctor 2",
    specialization: "Cardiologist",
  },
  // Add more objects as needed
];

const Search = () => {
  const [isData, setIsData] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState("");
  const { setModal2Open, setModelType, setModelMessgae } =
    React.useContext(AuthContext);

  const handleSeatrchKey = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchKey.trim()) {
      setModelType("Error");
      setModelMessgae("Search field is empty! write correct term to search");
      setModal2Open(true);
      return;
    }
    setLoading(true);
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
                </tr>
              </thead>
              <tbody>
                {/* Map through the data array */}
                {doctorsData.map((doctor) => (
                  <tr key={doctor.id}>
                    <td>
                      {/* Render doctor's image */}
                      <img
                        src={doctor.imageSrc}
                        alt={doctor.name}
                        height={100}
                        width={100}
                      />
                    </td>
                    <td>
                      {/* Render doctor's details */}
                      <div>
                        <span>{doctor.email}</span> <br />
                        <span>{doctor.name}</span>
                      </div>
                    </td>
                    <td>
                      {/* Render doctor's specialization */}
                      {doctor.specialization}
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
