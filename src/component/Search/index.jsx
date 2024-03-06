import React from "react";
import "./Search.css";

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
  return (
    <section>
      <div className="search">
        <div className="searchmain">
          <div className="search-input-container">
            <form className="form-wrapper cf">
              <input type="text" placeholder="Search here..." required />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
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
                    <img src={doctor.imageSrc} alt={doctor.name} height={100} width={100} />
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
      </div>
    </section>
  );
};

export default Search;
