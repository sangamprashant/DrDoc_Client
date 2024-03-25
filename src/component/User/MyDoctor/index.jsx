import React from "react";
import "./MyDoctor.css";
import DoctorsCard from "./DoctorsCard";
import axios from "axios";
import { BASE_API } from "../../../config";
import { AuthContext } from "../../../AuthContext";
import {Loading } from "component-craftsman"

const MyDoctor = () => {
  const { token } = React.useContext(AuthContext);
  const [doctors, setDoctors] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (token) {
      fetchMyDoctors();
    }
  }, []);

  const fetchMyDoctors = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <div className="my-doctors-header mb-5">
        <h1 class="">My Doctors</h1>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
            <Loading label="loading" loading={4} />
          </div>
      ) : (
        <ul class="cards row">
          {doctors.map((data, index) => (
            <DoctorsCard data={data} key={index} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MyDoctor;
