import React, { useState, useEffect } from 'react';
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import abi from "./contractJson/Report.json"
import { ethers } from 'ethers'

import './admin-dash.css'

const AdminDash = (props) => {
    const [state, setState] = useState({
        provider: null,
        signer: null,
        contract: null,
      });
    const [account, setAccount] = useState("None");
    
    useEffect(() => {
        const loadReports = async () => {
            const contractAddress = "0x847F1e87E9692993a3e2B8Dd22867f73e3818281";
            const contractABI = abi.abi;
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    contractAddress,
                    contractABI,
                    signer
                );
                setAccount(account);
                setState({ provider, signer, contract });
            } else {
                console.log('Please install MetaMask or similar extension to use Ethereum features');
            }
        };
        loadReports();
    }, []);
    
    const [report, setreport] = useState([]);
    const { contract } = state;
    useEffect(() => {
        const reportsMessage = async () => {
          const memos = await contract.viewReports();
          setreport(memos);
        };
        contract && reportsMessage();
      }, [contract]);
    return (
        <div className="admin-dash-container">
          <Helmet>
            <title>Admin-Dash - Character NFT template</title>
            <meta property="og:title" content="Admin-Dash - Character NFT template" />
          </Helmet>
          <div className="admin-dash-container1">
            <div className="admin-dash-container2">
              <h1>Admin Panel - Crime Reports</h1>
              <table id="crimeTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Crime Type</th>
                    <th>Location</th>
                    <th>Time</th>
                    
                    <th>Description</th>
                    <th>Severity</th>
                  </tr>
                </thead>
                <tbody>
                  {report.map((memo) => (
                    <tr key={Math.random()}>
                      <td>{memo.from}</td>
                      <td>{memo.crimetype}</td>
                      <td>{memo.location}</td>
                      <td>{new Date(memo.timestamp * 1000).toLocaleString()}</td>
                      
                      <td>{memo.message}</td>
                      <td>{memo.severity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    ); 
}

export default AdminDash;





