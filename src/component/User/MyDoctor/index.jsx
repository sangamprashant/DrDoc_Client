import React from "react";
import "./MyDoctor.css";
import DoctorsCard from "./DoctorsCard";
import axios from "axios";
import { BASE_API } from "../../../config";
import { AuthContext } from "../../../AuthContext";

const MyDoctor = () => {
  const { token } = React.useContext(AuthContext);
  const [doctors, setDoctors] = React.useState([]);

  React.useEffect(() => {
    if (token) {
      fetchMyDoctors();
    }
  }, []);

  const fetchMyDoctors = async () => {
    try {
      const response = await axios.get(`${BASE_API}/user/user/get-doctor`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setDoctors(response.data.doctors);
      }
    } catch (error) {
    } finally {
    }
  };

  return (
    <section className="container">
      <div className="my-doctors-header mb-5">
        <h1 class="">My Doctors</h1>
      </div>

      <ul class="cards row">
      {doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}
        
        {doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}
        {doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}{doctors.map((data, index) => (
          <DoctorsCard data={data} key={index} />
        ))}



      </ul>
    </section>
  );
};

export default MyDoctor;
