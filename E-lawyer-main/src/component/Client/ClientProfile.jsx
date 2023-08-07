import React from "react";
import { useState } from "react";
import "./ClientProfile.css";
import ClientHeader from "./ClientHeader";
import { toast } from "react-toastify";
const ClientProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [validationResult, SetValidationResult] = useState("");
  const [countryCode, SetCountryCode] = useState("+1");
  const [phoneNumber, SetPhoneNumber] = useState("");
  const [validation, setValidation] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedDegree, setSelectedDegree] = useState(null);

  const handleDegreeUpload = (event) => {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
      setSelectedDegree(file);
    } else {
      setSelectedDegree(null);
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setSelectedPhoto(file);
  };

  const handleCountryCodeChange = (event) => {
    SetCountryCode(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    SetPhoneNumber(event.target.value);
  };
  const handleInputChange = (event) => {
    setAadharNumber(event.target.value);
  };
  const handleValidationNumber = () => {
    const phoneNumberPattern = /^[0-9]{10}$/;

    if (phoneNumberPattern.test(phoneNumber)) {
      setValidation(`Valid mobile number: ${countryCode}${phoneNumber}`);
    } else {
      setValidation("Invalid mobile number. Please enter a 10-digit number.");
    }
  };
  const handleValidation = () => {
    const aadharPattern = /^\d{12}$/;
    if (aadharPattern.test(aadharNumber)) {
      SetValidationResult("valid Aadhar number!");
    } else {
      SetValidationResult(
        "Invaild Aadhar number. Please enter a 12-digit number"
      );
    }
  };

  const handleSave = () => {
    const formData = {
      firstName,
      lastName,
      currentAddress,
      permanentAddress,
      email,
      aadharNumber,
      countryCode,
      phoneNumber,
    };

    // Add your save functionality here
    console.log("Form data:", formData);
    toast.success("Save Details ...");
  };
  return (
    <>
      <ClientHeader />
      <div className="profile">
        <div className="main-profile">
          <div className="profile-details">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>

            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label>Current Address:</label>
            <input
              type="text"
              value={currentAddress}
              onChange={(e) => setCurrentAddress(e.target.value)}
            />
            <label>Permanent Address:</label>
            <input
              type="text"
              value={permanentAddress}
              onChange={(e) => setPermanentAddress(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="photoUpload">Profile Photo:</label>
            <input
              type="file"
              id="photoUpload"
              name="photoUpload"
              accept="image/*"
              onChange={handlePhotoUpload}
              required
            />
            {selectedPhoto && (
              <div className="profile-photo-container">
                <img
                  className="profile-photo"
                  src={URL.createObjectURL(selectedPhoto)}
                  alt="Selected Profile"
                />
              </div>
            )}
            <label htmlFor="degreeUpload">Degree Document (PDF):</label>
            <input
              type="file"
              id="degreeUpload"
              name="degreeUpload"
              accept=".pdf"
              onChange={handleDegreeUpload}
              required
            />
            <div className="Number">
              <label htmlFor="countryCode">Country Code:</label>
              <select
                id="countryCode"
                name="countryCode"
                value={countryCode}
                onChange={handleCountryCodeChange}
              >
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
                <option value="+44">+44 (UK)</option>
                {/* Add more country codes as needed */}
              </select>
              <br />
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="XXXXXXXXXX"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <button onClick={handleValidationNumber}>Validate</button>
            <div>{validation}</div>

            <label htmlFor="aadhar">Aadhar Number:</label>
            <input
              type="text"
              id="aadhar"
              name="aadhar"
              value={aadharNumber}
              placeholder="XXXX-XXXX-XXXX"
              onChange={handleInputChange}
              required
            />
            <button onClick={handleValidation}>Validate</button>
            <div>{validationResult}</div>
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
