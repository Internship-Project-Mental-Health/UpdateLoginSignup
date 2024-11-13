import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    phoneNumber: '123-456-7890',
    appointmentHistory: [
      { date: '2024-10-01', service: 'Therapy Session' },
      { date: '2024-09-25', service: 'Counseling' },
    ],
    purchaseHistory: [
      { item: 'Mental Wellness Book', date: '2024-10-01', price: 'Rs 500' },
      { item: 'Mindfulness Journal', date: '2024-09-20', price: 'Rs 300' },
    ],
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action (clear localStorage/sessionStorage, etc.)
    console.log('Logging out...');
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </div>
      </div>
      <div className="history-section">
        <h3>Appointment History</h3>
        <ul>
          {user.appointmentHistory.map((appointment, index) => (
            <li key={index}>
              {appointment.date} - {appointment.service}
            </li>
          ))}
        </ul>
      </div>
      <div className="history-section">
        <h3>Purchase History</h3>
        <ul>
          {user.purchaseHistory.map((purchase, index) => (
            <li key={index}>
              {purchase.item} ({purchase.date}) - {purchase.price}
            </li>
          ))}
        </ul>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
