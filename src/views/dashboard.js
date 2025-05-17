import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ethers } from 'ethers';
import abi from "./contractJson/Report.json";
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import './dashboard.css';

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;

const SEPOLIA_CHAIN_ID = '0xAA36A7';

const Dashboard = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner]     = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount]   = useState("None");
  const [report, setReport]     = useState([]);

  useEffect(() => {
    const initOnboard = async () => {
      if (!window.ethereum) {
        console.error("MetaMask not detected");
        return;
      }

      // 1️⃣ Ensure the user is on Holesky
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: SEPOLIA_CHAIN_ID }],
        });
      } catch (switchError) {
        // 4902: chain not added to MetaMask
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId:            SEPOLIA_CHAIN_ID,
                chainName:          'Sepolia',
                rpcUrls:            ['https://sepolia.infura.io'],
                nativeCurrency:     { name: 'Ether', symbol: 'ETH', decimals: 18 },
                blockExplorerUrls:  ['https://sepolia.etherscan.io'],
              }],
            });
          } catch (addError) {
            console.error("Failed to add Holesky network", addError);
            return;
          }
        } else {
          console.error("Failed to switch to Holesky", switchError);
          return;
        }
      }

      // 2️⃣ After network is correct, set up ethers
      const prov = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' }); 
      const sign = prov.getSigner();
      const addr = await sign.getAddress();
      const crimeContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        abi.abi,
        sign
      );

      setProvider(prov);
      setSigner(sign);
      setAccount(addr.toLowerCase());
      setContract(crimeContract);
    };

    initOnboard();
  }, []);

  // Fetch & filter reports for this account
  const fetchReports = async () => {
    if (!contract || account === "None") return;
    try {
      const memos = await contract.viewReports();
      const filtered = memos
        .filter(m => m.from.toLowerCase() === account)
        .map(m => ({
          SI:        m.SI.toNumber(),
          timestamp: m.timestamp.toNumber(),
          crimetype: m.crimetype,
          location:  m.location,
          severity:  m.severity,
          message:   m.message,
          from:      m.from,
          solved:    m.remark
        }));
      setReport(filtered);
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [contract, account]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!contract) return;
    const crimeType   = e.target.crimeType.value;
    const location    = e.target.location.value;
    const description = e.target.description.value;
    const severity    = e.target.severity.value;
    try {
      const tx = await contract.ReportCrime(
        crimeType,
        location,
        description,
        severity
      );
      await tx.wait();
      await fetchReports();
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard</title>
        <meta property="og:title" content="Dashboard" />
      </Helmet>

      <div className="dashboard-content">
        <img
          alt="Holesky Graphic"
          src="/group%202415.svg"
          className="dashboard-image1"
        />
        <div className="dashboard-container1">
          <div className="dashboard-container2">
            <h1>Crime Reporting Form</h1>
            <form id="crimeForm" onSubmit={submitForm}>
              <div>
                <label htmlFor="crimeType">Type of Crime:</label>
                <select id="crimeType" name="crimeType" required defaultValue="">
                  <option value="" disabled>Select type of crime</option>
                  <option value="Theft">Theft</option>
                  <option value="Assault">Assault</option>
                  <option value="Vandalism">Vandalism</option>
                  <option value="Murder">Murder</option>
                  <option value="Fraud">Fraud</option>
                </select>
              </div>

              <div>
                <label htmlFor="time">Time:</label>
                <Flatpickr
                  id="time"
                  name="time"
                  value={new Date()}
                  options={{ enableTime: true, dateFormat: "Y-m-d H:i" }}
                />
              </div>

              <div>
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter location manually"
                  required
                />
              </div>

              <div>
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  cols={50}
                  placeholder="Provide a brief narrative of the crime..."
                  required
                />
              </div>

              <div>
                <label htmlFor="severity">Severity:</label>
                <select id="severity" name="severity" required defaultValue="">
                  <option value="" disabled>Select severity</option>
                  <option value="Minor">Minor</option>
                  <option value="Major">Major</option>
                  <option value="Life-threatening">Life-threatening</option>
                </select>
              </div>

              <button type="submit">Submit Report</button>
            </form>
          </div>
        </div>
      </div>

      <div className="admin-dash-container2">
        <h1>Your Reports</h1>
        <table id="crimeTable">
          <thead>
            <tr>
              <th>From</th>
              <th>Crime Type</th>
              <th>Location</th>
              <th>Time</th>
              <th>Description</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {report.map((memo, idx) => (
              <tr key={idx}>
                <td>{memo.from}</td>
                <td>{memo.crimetype}</td>
                <td>{memo.location}</td>
                <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                <td>{memo.message}</td>
                <td>{memo.severity}</td>
                <td>{memo.solved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
