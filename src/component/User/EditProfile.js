import React, { useState } from "react";
import Container from "../Container/Container";
import Heading from "./reuse/Heading";
import { AuthContext } from "../../AuthContext";

function EditProfile() {
  const { isLogged, setIsLogged, token, setToken, LoggedUserData,setLoggedUserData } = React.useContext(AuthContext);
  const [userData,setUserData] = React.useState(JSON.parse(JSON.stringify(LoggedUserData)) || null)
  const [isLoading, setIsLoading] = useState(false)

  React.useEffect(()=>{
    setUserData(JSON.parse(JSON.stringify(LoggedUserData)))
  },[LoggedUserData])

  const handleUpdate = async (e) => {
    e.preventDefault()
    console.log("user data is:",userData)
  }

  const handlePersonalInput = (e) => {
    const {name,value} = e.target
    setUserData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: value,
      },
    }));
  };

  const handleAddressInput = (e) => {
    const {name,value} = e.target
    setUserData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleBankInput = (e) => {
    const {name,value} = e.target
    setUserData((prev) => ({
      ...prev,
      bank: {
        ...prev.bank,
        [name]: value,
      },
    }));
  };

  return (
    <Container>
      <Heading title="Edit profile" />
      <hr />
      <form onSubmit={handleUpdate}>

        <h4>Personal Information </h4>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={userData?.personal?.name} onChange={handlePersonalInput}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={userData?.personal?.email} onChange={handlePersonalInput} />
          </div>
          <div className="col-md-6">
            <label htmlFor="dateOfBirth" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dateOfBirth" name="dateOfBirth"  value={userData?.personal?.dateOfBirth} onChange={handlePersonalInput}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="gender" className="form-label">Gender</label> <br />
            <input type="radio" value="male" name="gender" checked={userData?.personal?.gender === "male"} onChange={handlePersonalInput}/> Male {" "}
            <input type="radio" value="female" name="gender" checked={userData?.personal?.gender === "female"} onChange={handlePersonalInput}/> Female
          </div>
          <div className="col-md-6">
            <label htmlFor="nationality" className="form-label">Nationality</label>
            <input type="text" className="form-control" id="nationality" name="nationality" placeholder="Nationality" value={userData?.personal?.nationality} onChange={handlePersonalInput}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="contactNumber" className="form-label">Contact number</label>
            <input type="number" className="form-control" id="contactNumber" name="contactNumber" placeholder="Contact number" value={userData?.personal?.contactNumber} onChange={handlePersonalInput}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="bloodGroup" className="form-label">Blood group</label>
            <select className="form-select" id="bloodGroup" name="bloodGroup" value={userData?.personal?.bloodGroup} onChange={handlePersonalInput}>
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="medicalHistory" className="form-label">Medical history</label>
            <input type="text" className="form-control" id="medicalHistory" name="medicalHistory" placeholder="Medical history" value={userData?.personal?.medicalHistory} onChange={handlePersonalInput}/>
          </div>
          {/* image selection and preview */}
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">Profile picture</label>
            <input type="file" accept="image/*" className="form-control" id="image" name="image" />
          </div>
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">Profile picture preview</label>
            <input type="text" className="form-control" id="image" name="image" />
          </div>
        </div>

        <h4>Address Information </h4>
        <div className="row mb-4">
          <div className="col-md-4">
            <label htmlFor="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" name="address" placeholder="Address" value={userData?.address?.address} onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" className="form-control" id="city" name="city" placeholder="City" value={userData?.address?.city} onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="currentAddress" className="form-label">Current Address</label>
            <input type="text" className="form-control" id="currentAddress" name="currentAddress" placeholder="Current address" value={userData?.address?.currentAddress} onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="pin" className="form-label">PIN</label>
            <input type="text" className="form-control" id="pin" name="pin" placeholder="Pin code" value={userData?.address?.pin} onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">Country</label>
            <input type="text" className="form-control" id="country" name="country" placeholder="Country" value={userData?.address?.country}  onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="landmark" className="form-label">landmark</label>
            <input type="text" className="form-control" id="landmark" name="landmark" placeholder="Landmark" value={userData?.address?.landmark}  onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">state</label>
            <input type="text" className="form-control" id="state" name="state" placeholder="State" value={userData?.address?.state}  onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="latitude" className="form-label">latitude</label>
            <input type="text" className="form-control" id="latitude" name="latitude" placeholder="Latitude" value={userData?.address?.latitude}  onChange={handleAddressInput}/>
          </div>
          <div className="col-md-4">
            <label htmlFor="longitude" className="form-label">longitude</label>
            <input type="text" className="form-control" id="longitude" name="longitude" placeholder="Longitude" value={userData?.address?.longitude}  onChange={handleAddressInput}/>
          </div>
        </div>

        <h4>Bank details</h4>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="bankAccount" className="form-label">Bank Account</label>
            <input type="text" className="form-control" id="bankAccount" name="bankAccount" placeholder="Bank account number" value={userData?.bank?.bankAccount} onChange={handleBankInput} />
          </div>
          <div className="col-md-6">
            <label htmlFor="accountHolderName" className="form-label">Account Holder Name</label>
            <input type="text" className="form-control" id="accountHolderName" name="accountHolderName" placeholder="Account holder name" value={userData?.bank?.accountHolderName} onChange={handleBankInput} />
          </div>
          <div className="col-md-6">
            <label htmlFor="ifcCode" className="form-label">IFC Code</label>
            <input type="text" className="form-control" id="ifcCode" name="ifcCode" placeholder="IFCE Code" value={userData?.bank?.ifcCode} onChange={handleBankInput} />
          </div>
          <div className="col-md-6">
            <label htmlFor="branch" className="form-label">Branch</label>
            <input type="text" className="form-control" id="branch" name="branch" placeholder="Branch name" value={userData?.bank?.branch} onChange={handleBankInput}/>
          </div>
        </div>

        {/* hospital form */}
        <h4>Doctor Form</h4>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="hospitalName">HospialName</label>
            <input type="text" className="form-control" id="hospitalName" name="hospitalName" placeholder="Hospital name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="specialization">specialization</label>
            <input type="text" className="form-control" id="specialization" name="specialization" placeholder="Specialization" />
          </div>
          <div className="col-md-6">
            <label htmlFor="experienceYears">experienceYears</label>
            <input type="number" className="form-control" id="experienceYears" name="experienceYears" placeholder="experienceYears" />
          </div>
          <div className="col-md-6">
            <label htmlFor="location">location</label>
            <input type="text" className="form-control" id="location" name="location" placeholder="location" />
          </div>
          <div className="col-md-6">
            <label htmlFor="department">department</label>
            <input type="text" className="form-control" id="department" name="department" placeholder="department" />
          </div>
          <div className="col-md-6">
            <label htmlFor="bedsAvailable">bedsAvailable</label>
            <input type="number" className="form-control" id="bedsAvailable" name="bedsAvailable" placeholder="bedsAvailable" />
          </div>
          <div className="col-md-6">
            <label htmlFor="website">website</label>
            <input type="text" className="form-control" id="website" name="website" placeholder="website" />
          </div>
          <div className="col-md-6">
            <label htmlFor="perConsultantCharge">perConsultantCharge</label>
            <input type="number" className="form-control" id="perConsultantCharge" name="perConsultantCharge" placeholder="perConsultantCharge" />
          </div>
          <div className="col-md-6">
            <label htmlFor="certification">Doctor Degree</label>
            <input type="text" className="form-control" id="certification" name="certification" placeholder="certification" />
          </div>
          <div className="col-md-6">
            <label htmlFor="certification">Doctor Degree File</label>
            <input type="file" className="form-control" id="certification" name="certification" placeholder="certification" />
          </div>
          <div className="col-md-6">
            <label htmlFor="certification"> Hospital certification</label>
            <input type="file" className="form-control" id="certification" name="certification" placeholder="certification" />
          </div>

        </div>

        <button type="submit" className="btn btn-primary">{isLoading?"Please wait..":"Update profile"}</button>
      </form>
    </Container>
  );
}

export default EditProfile;
