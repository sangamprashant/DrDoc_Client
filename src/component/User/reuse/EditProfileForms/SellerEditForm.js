import React from "react";
import { TimePicker } from "antd";

function SellerEditForm({ userData, setUserData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      store: {
        ...prevUserData.store,
        [name]: value,
      },
    }));
  };

  const handleOpeningHoursChange = (time) => {
    if (time) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        store: {
          ...prevUserData.store,
          openingHours: time.format("HH:mm a"),
        },
      }));
    }
  };

  const handleClosingHoursChange = (time) => {
    if (time) {
      setUserData((prevUserData) => ({
        ...prevUserData,
        store: {
          ...prevUserData.store,
          closingHours: time.format("HH:mm a"),
        },
      }));
    }
  };

  return (
    <>
      <h4>Seller Form</h4>
      <form>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="storeName">Store Name</label>
            <input
              id="storeName"
              type="text"
              className="form-control"
              name="storeName"
              placeholder="Enter store name"
              value={userData?.store?.storeName || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              type="text"
              className="form-control"
              name="location"
              placeholder="Enter location"
              value={userData?.store?.location || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="ratings">Ratings</label>
            <input
              id="ratings"
              type="number"
              className="form-control"
              name="ratings"
              placeholder="Enter ratings"
              value={userData?.store?.ratings || ""}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="openingHours">Opening Hours</label>
            <div className="d-flex gap-2">
              <TimePicker
                format="HH:mm a"
                onChange={handleOpeningHoursChange}
                className="form-control"
              />
              <input
                value={userData?.store?.openingHours || "Select a time"}
                className="form-control"
                disabled
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="closingHours">Closing Hours</label>
            <div className="d-flex gap-2">
              <TimePicker
                format="HH:mm a"
                onChange={handleClosingHoursChange}
                className="form-control"
              />
              <input
                value={userData?.store?.closingHours || "Select a time"}
                className="form-control"
                disabled
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="images">Images</label>
            <input
              id="images"
              type="text"
              className="form-control"
              name="images"
              placeholder="Enter image URLs"
              value={userData?.store?.images?.join(", ") || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default SellerEditForm;
