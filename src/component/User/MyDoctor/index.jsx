import React from "react";
import "./MyDoctor.css";
import DoctorsCard from "./DoctorsCard";

const MyDoctor = () => {
  return (
    <section className="container">
      <div className="my-doctors-header mb-5">
        <h1 class="">My Doctors</h1>
      </div>

      <ul class="cards">
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
        <DoctorsCard />
      </ul>
    </section>
  );
};

export default MyDoctor;
