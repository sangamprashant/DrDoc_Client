import React from "react";

function AddressEditForm({ userData, setUserData }) {
  const handleAddressInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };
  return (
    <div className="mt-5">
      <h4>Address Information </h4>
      <div className="row mb-4">
        <div className="col-md-4">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Address"
            value={userData?.address?.address}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="City"
            value={userData?.address?.city}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="currentAddress" className="form-label">
            Current Address
          </label>
          <input
            type="text"
            className="form-control"
            id="currentAddress"
            name="currentAddress"
            placeholder="Current address"
            value={userData?.address?.currentAddress}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="pin" className="form-label">
            PIN
          </label>
          <input
            type="text"
            className="form-control"
            id="pin"
            name="pin"
            placeholder="Pin code"
            value={userData?.address?.pin}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            placeholder="Country"
            value={userData?.address?.country}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="landmark" className="form-label">
            landmark
          </label>
          <input
            type="text"
            className="form-control"
            id="landmark"
            name="landmark"
            placeholder="Landmark"
            value={userData?.address?.landmark}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            state
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            placeholder="State"
            value={userData?.address?.state}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="latitude" className="form-label">
            latitude
          </label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            name="latitude"
            placeholder="Latitude"
            value={userData?.address?.latitude}
            onChange={handleAddressInput}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="longitude" className="form-label">
            longitude
          </label>
          <input
            type="text"
            className="form-control"
            id="longitude"
            name="longitude"
            placeholder="Longitude"
            value={userData?.address?.longitude}
            onChange={handleAddressInput}
          />
        </div>
      </div>
    </div>
  );
}

export default AddressEditForm;
