import React from "react";
import { Icons } from "../../../../assets/icons";
import { toast } from "react-toastify";

function DeliveryEditForm({ userData, setUserData }) {
  const [addressInput, setAddressInput] = React.useState("");

  const handleDeliveryInput = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        [name]: value,
      },
    }));
  };

  const handleAddToList = () => {
    if (!addressInput.trim()) {
      return toast.warning("Enter a valid location to add");
    }
    setUserData((prev) => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        deliveryAreas: [...prev.delivery.deliveryAreas, addressInput.trim()],
      },
    }));
    setAddressInput("");
  };

  const handleRemoveFromList = (index) => {
    setUserData((prev) => ({
      ...prev,
      delivery: {
        ...prev.delivery,
        deliveryAreas: [
          ...prev.delivery.deliveryAreas.slice(0, index),
          ...prev.delivery.deliveryAreas.slice(index + 1),
        ],
      },
    }));
  };

  return (
    <>
      <h4>Delivery Form</h4>
      <form>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="vehicleType">Vehicle Type</label>
            <input
              id="vehicleType"
              type="text"
              className="form-control"
              name="vehicleType"
              placeholder="Vehicle type"
              value={userData?.delivery?.vehicleType || ""}
              onChange={handleDeliveryInput}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="vehicleNumber">Vehicle Number</label>
            <input
              id="vehicleNumber"
              type="text"
              className="form-control"
              name="vehicleNumber"
              placeholder="Vehicle number"
              value={userData?.delivery?.vehicleNumber || ""}
              onChange={handleDeliveryInput}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="experienceYears">Experience Years</label>
            <input
              id="experienceYears"
              type="number"
              className="form-control"
              name="experienceYears"
              placeholder="Experience years"
              value={userData?.delivery?.experienceYears || ""}
              onChange={handleDeliveryInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="licenseNumber">License Number</label>
            <input
              id="licenseNumber"
              type="text"
              className="form-control"
              name="licenseNumber"
              placeholder="License number"
              value={userData?.delivery?.licenseNumber || ""}
              onChange={handleDeliveryInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="licenseExpiryDate">License Expiry Date</label>
            <div className="d-flex gap-2">
              <input
                id="licenseExpiryDate"
                type="date"
                className="form-control"
                name="licenseExpiryDate"
                placeholder="License expiry date"
                value={userData?.delivery?.licenseExpiryDate || ""}
                onChange={handleDeliveryInput}
              />
              <span className="btn">{">"}</span>
              <input
                type="text"
                disabled
                className="form-control"
                value={userData?.delivery?.licenseExpiryDate || ""}
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="vehicleModel">Vehicle Model</label>
            <input
              id="vehicleModel"
              type="string"
              className="form-control"
              name="vehicleModel"
              placeholder="Vehicle model"
              value={userData?.delivery?.vehicleModel || ""}
              onChange={handleDeliveryInput}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="vehicleCapacity">Vehicle Capacity</label>
            <input
              id="vehicleCapacity"
              type="number"
              className="form-control"
              name="vehicleCapacity"
              placeholder="Vehicle capacity"
              value={userData?.delivery?.vehicleCapacity || ""}
              onChange={handleDeliveryInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="deliveryAreas">Delivery Areas</label>
            <div className="d-flex gap-2">
              <input
                id="deliveryAreas"
                type="text"
                className="form-control"
                name="deliveryAreas"
                placeholder="Delivery areas"
                value={addressInput}
                onChange={(e) => {
                  setAddressInput(e.target.value);
                }}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddToList}
              >
                {Icons.AddIcon}
              </button>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="col-md 6">
            <table className="table">
              <thead>
                <tr>
                  <th>Delivery areas list</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData?.delivery?.deliveryAreas?.map((area, index) => (
                  <tr key={index}>
                    <td>{area}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemoveFromList(index)}
                      >
                        {Icons.RemoveIcon}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </>
  );
}

export default DeliveryEditForm;
