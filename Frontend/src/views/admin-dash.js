import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './admin-dash.css'

const AdminDash = (props) => {
  return (
    <div className="admin-dash-container">
      <Helmet>
        <title>Admin-Dash - Character NFT template</title>
        <meta
          property="og:title"
          content="Admin-Dash - Character NFT template"
        />
      </Helmet>
      <div className="admin-dash-container1">
        <div className="admin-dash-container2">
          <Script
            html={`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Panel - Crime Reports</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #27272D;
    }
    h1 {
        text-align: center;
        margin-bottom: 20px;
        color: #333;
    }
    table {
        border-collapse: collapse;
        width: 100%;
        background-color: #white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        margin: 20px auto;
    }
    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
    th:first-child,
    td:first-child {
        width: 5%;
    }
</style>
</head>
<body>
<h1>Admin Panel - Crime Reports</h1>
<table id="crimeTable">
    <thead>
        <tr>
            <th>ID</th>
            <th>Crime Type</th>
            <th>State</th>
            <th>District</th>
            <th>Time</th>
            <th>Media</th>
            <th>Description</th>
            <th>Severity</th>
        </tr>
    </thead>
    <tbody>
        <!-- Data will be dynamically inserted here using JavaScript -->
    </tbody>
</table>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const crimeTable = document.getElementById('crimeTable').getElementsByTagName('tbody')[0];

        // Check if formData cookie exists
        const formDataCookie = Cookies.get('formData');
        if (formDataCookie) {
            // Parse the JSON data from the cookie
            const formData = JSON.parse(formDataCookie);

            // Create a row in the table and populate it with the form data
            const newRow = crimeTable.insertRow();
            newRow.innerHTML = \`
                <td>1</td> <!-- You can replace this with an actual ID from your database -->
                <td>\${formData.crimeType}</td>
                <td>\${formData.state}</td>
                <td>\${formData.district}</td>
                <td>\${formData.time}</td>
                <td>\${formData.media}</td>
                <td>\${formData.description}</td>
                <td>\${formData.severity}</td>
            \`;
        } else {
            // Show a message if no data is found in cookies
            const newRow = crimeTable.insertRow();
            newRow.innerHTML = \`<td colspan='8'>No data found in cookies</td>\`;
        }
    });
</script>
</body>
</html>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default AdminDash
