/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';

function BikeRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bikeType: '',
    color: '',
    serialNumber: '',
    datePurchased: '',
    agreeToTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Do something with the form data here
  };

  return (
    <div>
    <h1>Bike Registration Form</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label><br></br><br></br>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label><br></br><br></br>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label><br></br><br></br>
      <label>
        Bike Type:
        <select name="bikeType" value={formData.bikeType} onChange={handleChange} required>
          <option value="">Select Bike Type</option>
          <option value="road">Road</option>
          <option value="mountain">Mountain</option>
          <option value="hybrid">Hybrid</option>
          <option value="city">City</option>
        </select>
      </label><br></br><br></br>
      <label>
        Color:
        <input type="text" name="color" value={formData.color} onChange={handleChange} required />
      </label><br></br><br></br>
      <label>
        Serial Number:
        <input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleChange} required />
      </label><br></br><br></br>
      <label>
        Date Purchased:
        <input type="date" name="datePurchased" value={formData.datePurchased} onChange={handleChange} required />
      </label><br></br><br></br>
      
      <button type="submit">Book Now</button>
    </form>
    </div>
  );
}

export default BikeRegistrationForm;

