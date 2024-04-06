import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Character NFT template</title>
        <meta
          property="og:title"
          content="Dashboard - Character NFT template"
        />
      </Helmet>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="dashboard-image"
      />
      <div className="dashboard-container1">
        <div className="dashboard-container2">
          <Script
            html={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crime Reporting Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #27272D; /* Background color */
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            margin-right: 50px;
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333; /* Text color on the form */
        }
        form {
            display: grid;
            gap: 25px;
        }
        label {
            font-weight: bold;
        }
        select,
        input[type="datetime-local"],
        textarea,
        input[type="text"] {
            width: 100%;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }
        button[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 16px;
        }
        button[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
<div class="container">
    <h1>Crime Reporting Form</h1>
    <form id="crimeForm">
        <div>
            <label for="crimeType">Type of Crime:</label>
            <select id="crimeType" name="crimeType" required>
                <option value="" disabled selected>Select type of crime</option>
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Vandalism">Vandalism</option>
                <option value="Murder">Murder</option>
                <option value="Fraud">Fraud</option>
            </select>
        </div>
        <div>
            <label for="state">State:</label>
            <select id="state" name="state" required>
                <option value="" disabled selected>Select state</option>
                 <option value="Andhra Pradesh">Andhra Pradesh</option>
                           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                           <option value="Assam">Assam</option>
                           <option value="Bihar">Bihar</option>
                           <option value="Chhattisgarh">Chhattisgarh</option>
                           <option value="Goa">Goa</option>
                           <option value="Gujarat">Gujarat</option>
                           <option value="Haryana">Haryana</option>
                           <option value="Himachal Pradesh">Himachal Pradesh</option>
                           <option value="Jharkhand">Jharkhand</option>
                           <option value="Karnataka">Karnataka</option>
                           <option value="Kerala">Kerala</option>
                           <option value="Madhya Pradesh">Madhya Pradesh</option>
                           <option value="Maharashtra">Maharashtra</option>
                           <option value="Manipur">Manipur</option>
                           <option value="Meghalaya">Meghalaya</option>
                           <option value="Mizoram">Mizoram</option>
                           <option value="Nagaland">Nagaland</option>
                           <option value="Odisha">Odisha</option>
                           <option value="Punjab">Punjab</option>
                           <option value="Rajasthan">Rajasthan</option>
                           <option value="Sikkim">Sikkim</option>
                           <option value="Tamil Nadu">Tamil Nadu</option>
                           <option value="Telangana">Telangana</option>
                           <option value="Tripura">Tripura</option>
                           <option value="Uttar Pradesh">Uttar Pradesh</option>
                           <option value="Uttarakhand">Uttarakhand</option>
                           <option value="West Bengal">West Bengal</option>
                           <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                           <option value="Chandigarh">Chandigarh</option>
                           <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                           <option value="Lakshadweep">Lakshadweep</option>
                           <option value="Delhi">Delhi</option>
                           <option value="Puducherry">Puducherry</option>
            </select>
        </div>
        <div>
            <label for="time">Time:</label>
            <input type="datetime-local" id="time" name="time" value="" required>
        </div>
        <div>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter location manually" required>
        </div>
        <div>
            <label for="media">Optional Media:</label>
            <input type="file" id="media" name="media">
        </div>
        <div>
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4" cols="50" placeholder="Provide a brief narrative of the crime..." required></textarea>
        </div>
        <div>
            <label for="severity">Severity:</label>
            <select id="severity" name="severity" required>
                <option value="" disabled selected>Select severity</option>
                <option value="Minor">Minor</option>
                <option value="Major">Major</option>
                <option value="Life-threatening">Life-threatening</option>
            </select>
        </div>
        <button type="submit">Submit Report</button>
    </form>
</div>

<script>
    document.addEventListener('DOMContentLoaded', () => {
        const stateDropdown = document.getElementById('state');

        stateDropdown.addEventListener('change', () => {
            const selectedState = stateDropdown.value;
            // You can add logic here to perform actions based on the selected state
        });

        const crimeForm = document.getElementById('crimeForm');
        crimeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(crimeForm);
            console.log('Form submitted:', formData);
            crimeForm.reset();
        });
    });
</script>
</body>
</html>
`}
          ></Script>
        </div>
      </div>
      <animate-on-reveal
        animation="heartBeat"
        duration="300ms"
        delay="0s"
        direction="normal"
        easing="ease"
        iteration="1"
      >
        <img
          alt="image"
          src="/group%202415.svg"
          data-thq-animate-on-reveal="true"
          className="dashboard-image1"
        />
      </animate-on-reveal>
    </div>
  )
}

export default Dashboard