import React, { useState } from "react";
import UserData from "./UserData";
import ClientHeader from "./ClientHeader";
import "./Client_home.css";
const Client_home = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  
  return (
    <>
      <ClientHeader />
      <div className="main-content">
        <div className="c-home">
        {UserData.filter(
            (lawyer) =>
              selectedCategory === "" ||
              lawyer.specialization === selectedCategory
          ).map((lawyer) => (
            <div key={lawyer.id} className="c-profile">
              <img src={lawyer.image} alt={lawyer.name} />
              <h4>{lawyer.name}</h4>
              <p>Email: {lawyer.email}</p>
              <p>Phone: {lawyer.phone}</p>
              <p>Experience: {lawyer.experience}</p>
              <p>Specialization: {lawyer.specialization}</p>
            </div>
          ))}
        </div>
        <div className="category">
          <label htmlFor="category">Category:</label>
          <select
            name="ctg"
            id="ctg"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            <option value="Family Lawyer">Family Lawyer</option>
            <option value="Tax Lawyer">Tax Lawyer</option>
            <option value="Business Lawyer">Business Lawyer</option>
            <option value="Criminal Defense Lawyer">Criminal Defense Lawyer</option>
            <option value="Entertainment Lawyer">Entertainment Lawyer</option>
            <option value="Estate Planning Lawyer">Estate Planning Lawyer</option>
            <option value="Intellectual Property (IP) Lawyer">Intellectual Property (IP) Lawyer</option>
          </select>
        </div>
      </div>
    </>
  )
};

export default Client_home;
