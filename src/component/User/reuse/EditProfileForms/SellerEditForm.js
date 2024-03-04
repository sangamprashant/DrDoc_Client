import React from "react";
import { TimePicker } from "antd";
import { storage } from "../../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function SellerEditForm({ userData, setUserData, setLoading }) {
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

  const handleImageFilesChange = async (e) => {
    const files = e.target.files;
    const urls = [];
    setLoading(true);
    for (let file of files) {
      const url = await handleUploadToFireBase(file);
      if (url) {
        urls.push(url);
      }
    }
    setUserData((prev) => ({
      ...prev,
      store: {
        ...prev.store,
        images: [...prev.store.images, ...urls],
      },
    }));
    console.log("images links", urls);
    setLoading(false);
  };

  const handleUploadToFireBase = async (selectImage) => {
    try {
      const fileRef = ref(storage, `DrDoc/${Date.now() + selectImage.name}`);
      await uploadBytes(fileRef, selectImage);
      const downloadURL = await getDownloadURL(fileRef);
      console.log(downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file: ", error);
      return null;
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
              type="file"
              className="form-control"
              name="images"
              accept="image/*"
              multiple
              placeholder="Enter image URLs"
              onChange={handleImageFilesChange}
            />
          </div>
          <div className="col-md-12 mt-2">
            <label htmlFor="images">Images Preview</label>
            <div className="flex flex-wrap gap-3">
              {userData?.store?.images.map((data, index) => (
                <>
                  <img
                    width="100px"
                    height="100%"
                    className=" object-fit-contain m-1"
                    src={data}
                    alt=""
                    key={index}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SellerEditForm;
