import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ethers } from 'ethers'
import abi from "./contractJson/Report.json"
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import './dashboard.css';

const Dashboard = (props) => {
  
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  
  const submitForm = async (event) => {
    event.preventDefault();
    const contractAddress = "0xe9a9baa843605876f95eed6DF8230f7314F7cE91";
    const contractABI = abi.abi;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    setAccount(account);
    setState({ provider, signer, contract });

    const crimeType = event.target.elements.crimeType.value;
    const location = event.target.elements.location.value;
    const description = event.target.elements.description.value;
    const severity = event.target.elements.severity.value;

    try {
      // Get user account
      const { contract } = state;
      const transaction = await contract.ReportCrime(crimeType, location, description, severity);
      await transaction.wait();
      // Call contract function
      //await contract.methods.ReportCrime(crimeType, location, description, severity).send({ from: accounts[0] });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  console.log(state);

  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Character NFT template</title>
        <meta property="og:title" content="Dashboard" />
      </Helmet>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="dashboard-image"
      />
      <div className="dashboard-container1">
        <div className="dashboard-container2">
          <div>
            <h1>Crime Reporting Form</h1>
            <form id="crimeForm" onSubmit={submitForm}>
              <div>
                <label htmlFor="crimeType">Type of Crime:</label>
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
                <label htmlFor="state">State:</label>
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
                <label htmlFor="time">Time:</label>
                <Flatpickr id="time" name="time" value={new Date()} options={{ enableTime: true, dateFormat: "Y-m-d H:i" }} />
              </div>
              <div>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" placeholder="Enter location manually" required />
              </div>
              <div>
                <label htmlFor="media">Optional Media:</label>
                <input type="file" id="media" name="media" />
              </div>
              <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" rows="4" cols="50" placeholder="Provide a brief narrative of the crime..." required></textarea>
              </div>
              <div>
                <label htmlFor="severity">Severity:</label>
                <select id="severity" name="severity" required>
                  <option value="" disabled selected>Select severity</option>
                  <option value="Minor">Minor</option>
                  <option value="Major">Major</option>
                  <option value="Life-threatening">Life-threatening</option>
                </select>
              </div>
              <button type="Submit">Submit Report</button>
            </form>
          </div>
        </div>
      </div>
      {/* The following image element is preserved from the original code */}
      <img
        alt="image"
        src="/group%202415.svg"
        className="dashboard-image1"
      />
    </div>
  )
}
// const detectAIContent = async (text) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'accept': 'application/json',
//       'content-type': 'application/json',
//       'authorization': 'Bearer YOUR_API_KEY' // Replace 'YOUR_API_KEY' with your actual API key
//     },
//     body: JSON.stringify({
//       text: text
//     })
//   };

//   try {
//     const response = await fetch('https://api.edenai.run/v2/text/ai_detection', options);
//     const data = await response.json();
//     console.log(data); // Log the response for debugging or further processing
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//     throw error;
//   }
// };

export default Dashboard;
