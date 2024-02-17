import React from "react";

function BankEditForm({ userData, setUserData }) {
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
    <>
      <h4>Bank details</h4>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="bankAccount" className="form-label">
            Bank Account
          </label>
          <input
            type="text"
            className="form-control"
            id="bankAccount"
            name="bankAccount"
            placeholder="Bank account number"
            value={userData?.bank?.bankAccount}
            onChange={handleBankInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="accountHolderName" className="form-label">
            Account Holder Name
          </label>
          <input
            type="text"
            className="form-control"
            id="accountHolderName"
            name="accountHolderName"
            placeholder="Account holder name"
            value={userData?.bank?.accountHolderName}
            onChange={handleBankInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="ifcCode" className="form-label">
            IFC Code
          </label>
          <input
            type="text"
            className="form-control"
            id="ifcCode"
            name="ifcCode"
            placeholder="IFCE Code"
            value={userData?.bank?.ifcCode}
            onChange={handleBankInput}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="branch" className="form-label">
            Branch
          </label>
          <input
            type="text"
            className="form-control"
            id="branch"
            name="branch"
            placeholder="Branch name"
            value={userData?.bank?.branch}
            onChange={handleBankInput}
          />
        </div>
      </div>
    </>
  );
}

export default BankEditForm;
