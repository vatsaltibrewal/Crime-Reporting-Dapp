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
        gap: 10px;
    }
    label {
        font-weight: bold;
    }
    select,
    input[type="datetime-local"],
    textarea {
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



                <!-- Add more states here -->
            </select>
        </div>
        <div>
            <label for="district">District:</label>
            <select id="district" name="district" required>
                <option value="" disabled selected>Select district</option>
            </select>
        </div>
        <div>
            <label for="time">Time:</label>
            <input type="datetime-local" id="time" name="time" value="" required>
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
        const districtDropdown = document.getElementById('district');

        const districtData ={
  "Andhra Pradesh": [
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Visakhapatnam",
    "Vizianagaram",
    "West Godavari",
    "YSR Kadapa"
  ],
  "Arunachal Pradesh": [
    "Tawang",
    "West Kameng",
    "East Kameng",
    "Papum Pare",
    "Kurung Kumey",
    "Kra Daadi",
    "Lower Subansiri",
    "Upper Subansiri",
    "West Siang",
    "East Siang",
    "Siang",
    "Upper Siang",
    "Lower Siang",
    "Lower Dibang Valley",
    "Dibang Valley",
    "Anjaw",
    "Lohit",
    "Namsai",
    "Changlang",
    "Tirap",
    "Longding"
  ],
  "Assam": [
    "Baksa",
    "Barpeta",
    "Biswanath",
    "Bongaigaon",
    "Cachar",
    "Charaideo",
    "Chirang",
    "Darrang",
    "Dhemaji",
    "Dhubri",
    "Dibrugarh",
    "Goalpara",
    "Golaghat",
    "Hailakandi",
    "Hojai",
    "Jorhat",
    "Kamrup Metropolitan",
    "Kamrup",
    "Karbi Anglong",
    "Karimganj",
    "Kokrajhar",
    "Lakhimpur",
    "Majuli",
    "Morigaon",
    "Nagaon",
    "Nalbari",
    "Dima Hasao",
    "Sivasagar",
    "Sonitpur",
    "South Salmara-Mankachar",
    "Tinsukia",
    "Udalguri",
    "West Karbi Anglong"
  ],
  "Bihar": [
    "Araria",
    "Arwal",
    "Aurangabad",
    "Banka",
    "Begusarai",
    "Bhagalpur",
    "Bhojpur",
    "Buxar",
    "Darbhanga",
    "East Champaran (Motihari)",
    "Gaya",
    "Gopalganj",
    "Jamui",
    "Jehanabad",
    "Kaimur (Bhabua)",
    "Katihar",
    "Khagaria",
    "Kishanganj",
    "Lakhisarai",
    "Madhepura",
    "Madhubani",
    "Munger (Monghyr)",
    "Muzaffarpur",
    "Nalanda",
    "Nawada",
    "Patna",
    "Purnia (Purnea)",
    "Rohtas",
    "Saharsa",
    "Samastipur",
    "Saran",
    "Sheikhpura",
    "Sheohar",
    "Sitamarhi",
    "Siwan",
    "Supaul",
    "Vaishali",
    "West Champaran"
  ],
  "Chandigarh (UT)": [
    "Chandigarh"
  ],
  "Chhattisgarh": [
    "Balod",
    "Baloda Bazar",
    "Balrampur",
    "Bastar",
    "Bemetara",
    "Bijapur",
    "Bilaspur",
    "Dantewada (South Bastar)",
    "Dhamtari",
    "Durg",
    "Gariyaband",
    "Janjgir-Champa",
    "Jashpur",
    "Kabirdham (Kawardha)",
    "Kanker (North Bastar)",
    "Kondagaon",
    "Korba",
    "Korea (Koriya)",
    "Mahasamund",
    "Mungeli",
    "Narayanpur",
    "Raigarh",
    "Raipur",
    "Rajnandgaon",
    "Sukma",
    "Surajpur  ",
    "Surguja"
  ],
  "Dadra and Nagar Haveli (UT)": [
    "Dadra & Nagar Haveli"
  ],
  "Daman and Diu (UT)": [
    "Daman",
    "Diu"
  ],
  "Delhi (NCT)": [
    "Central Delhi",
    "East Delhi",
    "New Delhi",
    "North Delhi",
    "North East  Delhi",
    "North West  Delhi",
    "Shahdara",
    "South Delhi",
    "South East Delhi",
    "South West  Delhi",
    "West Delhi"
  ],
  "Goa": [
    "North Goa",
    "South Goa"
  ],
  "Gujarat": [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha (Palanpur)",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udepur",
    "Dahod",
    "Dangs (Ahwa)",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kachchh",
    "Kheda (Nadiad)",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada (Rajpipla)",
    "Navsari",
    "Panchmahal (Godhra)",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha (Himmatnagar)",
    "Surat",
    "Surendranagar",
    "Tapi (Vyara)",
    "Vadodara",
    "Valsad"
  ],
  "Haryana": [
    "Ambala",
    "Bhiwani",
    "Charkhi Dadri",
    "Faridabad",
    "Fatehabad",
    "Gurgaon",
    "Hisar",
    "Jhajjar",
    "Jind",
    "Kaithal",
    "Karnal",
    "Kurukshetra",
    "Mahendragarh",
    "Mewat",
    "Palwal",
    "Panchkula",
    "Panipat",
    "Rewari",
    "Rohtak",
    "Sirsa",
    "Sonipat",
    "Yamunanagar"
  ],
  "Himachal Pradesh": [
    "Bilaspur",
    "Chamba",
    "Hamirpur",
    "Kangra",
    "Kinnaur",
    "Kullu",
    "Lahaul & Spiti",
    "Mandi",
    "Shimla",
    "Sirmaur (Sirmour)",
    "Solan",
    "Una"
  ],
  "Jammu and Kashmir": [
    "Anantnag",
    "Bandipore",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur"
  ],
  "Jharkhand": [
    "Bokaro",
    "Chatra",
    "Deoghar",
    "Dhanbad",
    "Dumka",
    "East Singhbhum",
    "Garhwa",
    "Giridih",
    "Godda",
    "Gumla",
    "Hazaribag",
    "Jamtara",
    "Khunti",
    "Koderma",
    "Latehar",
    "Lohardaga",
    "Pakur",
    "Palamu",
    "Ramgarh",
    "Ranchi",
    "Sahebganj",
    "Seraikela-Kharsawan",
    "Simdega",
    "West Singhbhum"
  ],
  "Karnataka": [
    "Bagalkot",
    "Ballari (Bellary)",
    "Belagavi (Belgaum)",
    "Bengaluru (Bangalore) Rural",
    "Bengaluru (Bangalore) Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikballapur",
    "Chikkamagaluru (Chikmagalur)",
    "Chitradurga",
    "Dakshina Kannada",
    "Davangere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi (Gulbarga)",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru (Mysore)",
    "Raichur",
    "Ramanagara",
    "Shivamogga (Shimoga)",
    "Tumakuru (Tumkur)",
    "Udupi",
    "Uttara Kannada (Karwar)",
    "Vijayapura (Bijapur)",
    "Yadgir"
  ],
  "Kerala": [
    "Alappuzha",
    "Ernakulam",
    "Idukki",
    "Kannur",
    "Kasaragod",
    "Kollam",
    "Kottayam",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
    "Pathanamthitta",
    "Thiruvananthapuram",
    "Thrissur",
    "Wayanad"
  ],
  "Ladakh (UT)": [
    "Kargil",
    "Leh"
  ],
  "Lakshadweep (UT)": [
    "Agatti",
    "Amini",
    "Androth",
    "Bithra",
    "Chetlat",
    "Kadmat",
    "Kalpeni",
    "Kavaratti",
    "Kiltan",
    "Minicoy"
  ],
  "Madhya Pradesh": [
    "Agar Malwa",
    "Alirajpur",
    "Anuppur",
    "Ashoknagar",
    "Balaghat",
    "Barwani",
    "Betul",
    "Bhind",
    "Bhopal",
    "Burhanpur",
    "Chhatarpur",
    "Chhindwara",
    "Damoh",
    "Datia",
    "Dewas",
    "Dhar",
    "Dindori",
    "Guna",
    "Gwalior",
    "Harda",
    "Hoshangabad",
    "Indore",
    "Jabalpur",
    "Jhabua",
    "Katni",
    "Khandwa",
    "Khargone",
    "Mandla",
    "Mandsaur",
    "Morena",
    "Narsinghpur",
    "Neemuch",
    "Panna",
    "Raisen",
    "Rajgarh",
    "Ratlam",
    "Rewa",
    "Sagar",
    "Satna",
    "Sehore",
    "Seoni",
    "Shahdol",
    "Shajapur",
    "Sheopur",
    "Shivpuri",
    "Sidhi",
    "Singrauli",
    "Tikamgarh",
    "Ujjain",
    "Umaria",
    "Vidisha"
  ],
  "Maharashtra": [
    "Ahmednagar",
    "Akola",
    "Amravati",
    "Aurangabad",
    "Beed",
    "Bhandara",
    "Buldhana",
    "Chandrapur",
    "Dhule",
    "Gadchiroli",
    "Gondia",
    "Hingoli",
    "Jalgaon",
    "Jalna",
    "Kolhapur",
    "Latur",
    "Mumbai City",
    "Mumbai Suburban",
    "Nagpur",
    "Nanded",
    "Nandurbar",
    "Nashik",
    "Osmanabad",
    "Palghar",
    "Parbhani",
    "Pune",
    "Raigad",
    "Ratnagiri",
    "Sangli",
    "Satara",
    "Sindhudurg",
    "Solapur",
    "Thane",
    "Wardha",
    "Washim",
    "Yavatmal"
  ],
  "Manipur": [
    "Bishnupur",
    "Chandel",
    "Churachandpur",
    "Imphal East",
    "Imphal West",
    "Jiribam",
    "Kakching",
    "Kamjong",
    "Kangpokpi",
    "Noney",
    "Pherzawl",
    "Senapati",
    "Tamenglong",
    "Tengnoupal",
    "Thoubal",
    "Ukhrul"
  ],
  "Meghalaya": [
    "East Garo Hills",
    "East Jaintia Hills",
    "East Khasi Hills",
    "North Garo Hills",
    "Ri Bhoi",
    "South Garo Hills",
    "South West Garo Hills",
    "South West Khasi Hills",
    "West Garo Hills",
    "West Jaintia Hills",
    "West Khasi Hills"
  ],
  "Mizoram": [
    "Aizawl",
    "Champhai",
    "Hnahthial",
    "Khawzawl",
    "Kolasib",
    "Lawngtlai",
    "Lunglei",
    "Mamit",
    "Saiha",
    "Saitual",
    "Serchhip"
  ],
  "Nagaland": [
    "Dimapur",
    "Kiphire",
    "Kohima",
    "Longleng",
    "Mokokchung",
    "Mon",
    "Peren",
    "Phek",
    "Tuensang",
    "Wokha",
    "Zunheboto"
  ],
  "Odisha": [
    "Angul",
    "Balangir",
    "Balasore",
    "Bargarh",
    "Bhadrak",
    "Boudh",
    "Cuttack",
    "Debagarh",
    "Dhenkanal",
    "Gajapati",
    "Ganjam",
    "Jagatsinghapur",
    "Jajpur",
    "Jharsuguda",
    "Kalahandi",
    "Kandhamal",
    "Kendrapara",
    "Kendujhar (Keonjhar)",
    "Khordha",
    "Koraput",
    "Malkangiri",
    "Mayurbhanj",
    "Nabarangpur",
    "Nayagarh",
    "Nuapada",
    "Puri",
    "Rayagada",
    "Sambalpur",
    "Subarnapur (Sonepur)",
    "Sundargarh"
  ],
  "Puducherry (UT)": [
    "Karaikal",
    "Mahe",
    "Puducherry",
    "Yanam"
  ],
  "Punjab": [
    "Amritsar",
    "Barnala",
    "Bathinda",
    "Faridkot",
    "Fatehgarh Sahib",
    "Fazilka",
    "Ferozepur",
    "Gurdaspur",
    "Hoshiarpur",
    "Jalandhar",
    "Kapurthala",
    "Ludhiana",
    "Mansa",
    "Moga",
    "Pathankot",
    "Patiala",
    "Rupnagar",
    "S.A.S. Nagar (Mohali)",
    "Sangrur",
    "Shaheed Bhagat Singh Nagar (Nawanshahr)",
    "Sri Muktsar Sahib",
    "Tarn Taran"
  ],
  "Rajasthan": [
    "Ajmer",
    "Alwar",
    "Banswara",
    "Baran",
    "Barmer",
    "Bharatpur",
    "Bhilwara",
    "Bikaner",
    "Bundi",
    "Chittorgarh",
    "Churu",
    "Dausa",
    "Dholpur",
    "Dungarpur",
    "Hanumangarh",
    "Jaipur",
    "Jaisalmer",
    "Jalore",
    "Jhalawar",
    "Jhunjhunu",
    "Jodhpur",
    "Karauli",
    "Kota",
    "Nagaur",
    "Pali",
    "Pratapgarh",
    "Rajsamand",
    "Sawai Madhopur",
    "Sikar",
    "Sirohi",
    "Sri Ganganagar",
    "Tonk",
    "Udaipur"
  ],
  "Sikkim": [
    "East Sikkim",
    "North Sikkim",
    "South Sikkim",
    "West Sikkim"
  ],
  "Tamil Nadu": [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kancheepuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar"
  ],
  "Telangana": [
    "Adilabad",
    "Bhadradri Kothagudem",
    "Hyderabad",
    "Jagtial",
    "Jangaon",
    "Jayashankar Bhupalpally",
"Jogulamba Gadwal",
"Kamareddy",
"Karimnagar",
"Khammam",
"Kumuram Bheem",
"Mahabubabad",
"Mahabubnagar",
"Mancherial",
"Medak",
"Medchal-Malkajgiri",
"Mulugu",
"Nagarkurnool",
"Nalgonda",
"Narayanpet",
"Nirmal",
"Nizamabad",
"Peddapalli",
"Rajanna Sircilla",
"Rangareddy",
"Sangareddy",
"Siddipet",
"Suryapet",
"Vikarabad",
"Wanaparthy",
"Warangal Rural",
"Warangal Urban",
"Yadadri Bhuvanagiri"
],
"Tripura": [
"Dhalai",
"Gomati",
"Khowai",
"North Tripura",
"Sepahijala",
"South Tripura",
"Unakoti",
"West Tripura"
],
"Uttar Pradesh": [
"Agra",
"Aligarh",
"Ambedkar Nagar",
"Amethi",
"Amroha",
"Auraiya",
"Ayodhya",
"Azamgarh",
"Baghpat",
"Bahraich",
"Ballia",
"Balrampur",
"Banda",
"Barabanki",
"Bareilly",
"Basti",
"Bhadohi",
"Bijnor",
"Budaun",
"Bulandshahr",
"Chandauli",
"Chitrakoot",
"Deoria",
"Etah",
"Etawah",
"Farrukhabad",
"Fatehpur",
"Firozabad",
"Gautam Buddha Nagar",
"Ghaziabad",
"Ghazipur",
"Gonda",
"Gorakhpur",
"Hamirpur",
"Hapur",
"Hardoi",
"Hathras",
"Jalaun",
"Jaunpur",
"Jhansi",
"Kannauj",
"Kanpur Dehat",
"Kanpur Nagar",
"Kasganj",
"Kaushambi",
"Kheri",
"Kushinagar",
"Lalitpur",
"Lucknow",
"Maharajganj",
"Mahoba",
"Mainpuri",
"Mathura",
"Mau",
"Meerut",
"Mirzapur",
"Moradabad",
"Muzaffarnagar",
"Pilibhit",
"Pratapgarh",
"Prayagraj",
"Raebareli",
"Rampur",
"Saharanpur",
"Sambhal",
"Sant Kabir Nagar",
"Shahjahanpur",
"Shamli",
"Shrawasti",
"Siddharthnagar",
"Sitapur",
"Sonbhadra",
"Sultanpur",
"Unnao",
"Varanasi"
],
"Uttarakhand": [
"Almora",
"Bageshwar",
"Chamoli",
"Champawat",
"Dehradun",
"Haridwar",
"Nainital",
"Pauri Garhwal",
"Pithoragarh",
"Rudraprayag",
"Tehri Garhwal",
"Udham Singh Nagar",
"Uttarkashi"
],
"West Bengal": [
"Alipurduar",
"Bankura",
"Birbhum",
"Cooch Behar",
"Dakshin Dinajpur (South Dinajpur)",
"Darjeeling",
"Hooghly",
"Howrah",
"Jalpaiguri",
"Jhargram",
"Kalimpong",
"Kolkata",
"Malda",
"Murshidabad",
"Nadia",
"North 24 Parganas",
"Paschim Bardhaman (West Bardhaman)",
"Paschim Medinipur (West Medinipur)",
"Purba Bardhaman (East Bardhaman)",
"Purba Medinipur (East Medinipur)",
"Purulia",
"South 24 Parganas",
"Uttar Dinajpur (North Dinajpur)"
]
}

        const populateDistrictDropdown = () => {
            const selectedState = stateDropdown.value;
            const districts = districtData[selectedState];
            districtDropdown.innerHTML = ''; // Clear previous options
            for (const district of districts) {
                const districtOption = document.createElement('option');
                districtOption.textContent = district;
                districtOption.value = district;
                districtDropdown.appendChild(districtOption);
            }
        };

        stateDropdown.addEventListener('change', populateDistrictDropdown);

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
