import React from "react";

const DoctorsCard = () => {
  return (
    <li class="cards__item">
      <div class="card">
        <div
          class="card__image"
          style={{
            backgroundImage:
              'url("https://avatars.githubusercontent.com/u/93257774?v=4")',
          }}
        ></div>
        <div class="card__content">
          <div class="card__title">Flex</div>
          <p class="card__text">
            This is the shorthand for flex-grow, flex-shrink and flex-basis
            combined. The second and third parameters (flex-shrink and
            flex-basis) are optional. Default is 0 1 auto.{" "}
          </p>
          <button class="btn  card__btn btn-outline-dark">View Profile</button>
        </div>
      </div>
    </li>
  );
};

export default DoctorsCard;
