import React, { useState } from "react";
import { theme } from "../rawdata";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthContext";

const ChangePassword = () => {
  const { setModal2Open, setModelType, setModelMessgae } =
    React.useContext(AuthContext);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = React.useState("");

  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword.trim() || !confirmPassword.trim() || !oldPassword.trim()) {
      setModelType("Warning");
      setModelMessgae("Please enter in all the fields");
      setModal2Open(true);
    } else if (newPassword.length < 8) {
      setModelType("Warning");
      setModelMessgae("Password must be at least 8 characters long");
      setModal2Open(true);
    } else if (!/[A-Z]/.test(newPassword)) {
      setModelType("Warning");
      setModelMessgae("Password must contain at least one uppercase letter");
      setModal2Open(true);
    } else if (!/\d/.test(newPassword)) {
      setModelType("Warning");
      setModelMessgae("Password must contain at least one digit");
      setModal2Open(true);
    } else if (!/[^a-zA-Z0-9]/.test(newPassword)) {
      setModelType("Warning");
      setModelMessgae("Password must contain at least one special character");
      setModal2Open(true);
    } else if (newPassword !== confirmPassword) {
      setModelType("Warning");
      setModelMessgae("Passwords do not match");
      setModal2Open(true);
    } else {
      setModelType("Success");
      setModelMessgae("Password changed successfully");
      setModal2Open(true);

      const reqBody = {
        oldPassword,
        newPassword,
        confirmPassword,
      };

      console.log(reqBody);

      // Call your password change API here
    }
  };

  return (
    <section className="change-password" style={{ marginTop: "70px" }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <div
              className={`card p-4 text-white `}
              style={{ background: theme }}
            >
              <h2 className="text-center mb-4">Change Password</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    Old Password
                  </label>
                  <input
                    type="password"
                    id="oldPassword"
                    className="form-control"
                    placeholder="Enter old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="form-control"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2 mt-4">
                  <button type="submit" className="btn btn-light">
                    Change Password
                  </button>
                </div>
              </form>
              <span
                className={`text-${
                  newPassword.length < 8 ? "danger" : "success"
                }`}
              >
                Password must be at least 8 characters long
              </span>
              <span
                className={`text-${
                  !/[A-Z]/.test(newPassword) ? "danger" : "success"
                }`}
              >
                Password must contain at least one uppercase letter
              </span>
              <span
                className={`text-${
                  !/\d/.test(newPassword) ? "danger" : "success"
                }`}
              >
                Password must contain at least one digit
              </span>
              <span
                className={`text-${
                  !/[^a-zA-Z0-9]/.test(newPassword) ? "danger" : "success"
                }`}
              >
                Password must contain at least one special character
              </span>
              <span
                className={`text-${
                  newPassword !== confirmPassword ||
                  !confirmPassword.trim() ||
                  !newPassword.trim()
                    ? "danger"
                    : "success"
                }`}
              >
                Passwords do not match
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
