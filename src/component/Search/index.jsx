import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <section>
      <div className="search">
      <div className="searchmain">

        <div className="search-input-container">
          <form class="form-wrapper cf">
            <input type="text" placeholder="Search here..." required />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
        <div className="container">
            <hr />
        </div>
      </div>
    </section>
  );
};

export default Search;
