import React from "react";
import { Link } from "react-router-dom";

const DoctorsCard = ({ data }) => {
  return (
    <li class="cards__item col-md-3">
      <div class="card">
        <div
          class="card__image"
          style={{
            backgroundImage:
              'url("https://avatars.githubusercontent.com/u/93257774?v=4")',
          }}
        ></div>
        <div class="card__content">
          <div class="card__title">{data.name}</div>
          <p class="card__text">
            <p>
              Specialization in{" "}
              <strong>{data?.hospital?.specialization}</strong>
            </p>
            <p>Location: {data?.hospital?.location}</p>
          </p>
          <Link
            to={`/doctor/${data._id}`}
            class="btn  card__btn btn-outline-dark"
          >
            View Profile
          </Link>
        </div>
      </div>
    </li>
  );
};

export default DoctorsCard;
