// AdminDash.jsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ethers } from 'ethers';
import abi from "./contractJson/Report.json";
import './admin-dash.css';

const CONTRACT_ADDRESS  = process.env.REACT_APP_CONTRACT_ADDRESS;
const SEPOLIA_CHAIN_ID  = '0xAA36A7';

const AdminDash = () => {
  const [provider, setProvider] = useState(null);
  const [signer,   setSigner]   = useState(null);
  const [contract, setContract] = useState(null);
  const [account,  setAccount]  = useState("None");
  const [reports,  setReports]  = useState([]);
  const [remarks,  setRemarks]  = useState({}); // New state for remarks

  // Initialize provider, network, signer & contract
  useEffect(() => {
    const init = async () => {
      if (!window.ethereum) {
        console.error("MetaMask not detected");
        return;
      }

      // Prompt switch to Holesky
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: SEPOLIA_CHAIN_ID }],
        });
      } catch (switchError) {
        // 4902: chain not added
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId:           SEPOLIA_CHAIN_ID,
                chainName:         'Sepolia',
                rpcUrls:           ['https://sepolia.infura.io'],
                nativeCurrency:    { name: 'Ether', symbol: 'ETH', decimals: 18 },
                blockExplorerUrls: ['https://sepolia.etherscan.io'],
              }],
            });
          } catch (addError) {
            console.error("Failed to add Holesky", addError);
            return;
          }
        } else {
          console.error("Failed to switch to Holesky", switchError);
          return;
        }
      }

      // After network is set
      const prov = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const sign = prov.getSigner();
      const addr = await sign.getAddress();

      const ctr = new ethers.Contract(
        CONTRACT_ADDRESS,
        abi.abi,
        sign
      );

      setProvider(prov);
      setSigner(sign);
      setAccount(addr.toLowerCase());
      setContract(ctr);
    };

    init();
  }, []);

  // Fetch all reports
  const fetchReports = async () => {
    if (!contract) return;
    try {
      const memos = await contract.viewReports();
      setReports(memos.map(m => ({
        SI:        m.SI.toNumber(),
        timestamp: m.timestamp.toNumber(),
        crimetype: m.crimetype,
        location:  m.location,
        severity:  m.severity,
        message:   m.message,
        from:      m.from,
        remark:    m.remark
      })));
    } catch (err) {
      console.error("Error fetching reports:", err);
    }
  };

  // Reload whenever contract is ready
  useEffect(() => {
    fetchReports();
  }, [contract]);

  // Submit remark handler
  const handleApprove = async (si) => {
    if (!contract) {
      console.error("Contract not initialized");
      return;
    }

    const remark = remarks[si];
    if (!remark || remark.trim() === "") {
      alert("Please enter a remark before submitting.");
      return;
    }

    try {
      const tx = await contract.approveByOwner(si, remark);
      await tx.wait();
      await fetchReports();
      setRemarks((prev) => ({ ...prev, [si]: "" }));
    } catch (err) {
      console.error(`Error updating remark for report #${si}:`, err);
    }
  };

  return (
    <div className="admin-dash-container">
      <Helmet>
        <title>Admin Panel — Crime Reports</title>
        <meta property="og:title" content="Admin Panel — Crime Reports" />
      </Helmet>

      <div className="admin-dash-header">
        <h1>Admin Panel — Crime Reports</h1>
        <p>Connected as: <strong>{account}</strong></p>
      </div>

      <table id="crimeTable">
        <thead>
          <tr>
            <th>SI</th>
            <th>From</th>
            <th>Type</th>
            <th>Location</th>
            <th>Time</th>
            <th>Description</th>
            <th>Severity</th>
            <th>Current Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(r => (
            <tr key={r.SI}>
              <td>{r.SI + 1}</td>
              <td>{r.from}</td>
              <td>{r.crimetype}</td>
              <td>{r.location}</td>
              <td>{new Date(r.timestamp * 1000).toLocaleString()}</td>
              <td>{r.message}</td>
              <td>{r.severity}</td>
              <td>{r.remark}</td>
              <td>
                { (
                  <>
                    <input
                      type="text"
                      value={remarks[r.SI] || ""}
                      onChange={(e) =>
                        setRemarks({ ...remarks, [r.SI]: e.target.value })
                      }
                      placeholder="Enter remark"
                      className="remark-input"
                    />
                    <button
                      onClick={() => handleApprove(r.SI)}
                      className="btn btn-submit"
                      disabled={!remarks[r.SI]}
                    >
                      Submit
                    </button>
                  </>
                ) }
              </td>
            </tr>
          ))}
          {reports.length === 0 && (
            <tr>
              <td colSpan={9} style={{ textAlign: 'center' }}>
                No reports found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDash;
