// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// const contractABI = /* Your Contract ABI here */;
// const contractAddress = "/* Your Contract Address here */";

// function VehicleHistory() {
//   const [vin, setVin] = useState('');
//   const [description, setDescription] = useState('');
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Function to request access to the user's MetaMask account
//   async function requestAccount() {
//     await window.ethereum.request({ method: 'eth_requestAccounts' });
//   }

//   // Function to connect to the contract and add a record
//   async function addRecord() {
//     if (!vin || !description) return;
//     try {
//       await requestAccount();
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(contractAddress, contractABI, signer);
//       const transaction = await contract.addRecord(vin, description);
//       await transaction.wait();
//       fetchRecords(); // Refresh the records list
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   // Function to fetch records for a given VIN
//   async function fetchRecords() {
//     if (!vin) return;
//     setLoading(true);
//     try {
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const contract = new ethers.Contract(contractAddress, contractABI, provider);
//       const records = await contract.getRecords(vin);
//       setRecords(records);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <input placeholder="VIN" value={vin} onChange={(e) => setVin(e.target.value)} />
//       <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button onClick={addRecord}>Add Record</button>
//       <button onClick={fetchRecords}>Fetch Records</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {records.map((record, index) => (
//             <li key={index}>{record.date}: {record.description}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default VehicleHistory;