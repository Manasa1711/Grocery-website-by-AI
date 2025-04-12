// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./Welcome.css"; // Add CSS for styling

// const Welcome = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="welcome-container">
//       <header className="header">
//         <h2 className="logo">🛒 Pricebook</h2>
//         <button className="sign-in-btn" onClick={() => navigate("/login")}>
//           Sign In
//         </button>
//       </header>

//       <div className="content">
//         <h1>The Solution to Plan Your Groceries in Minutes</h1>
//         <button className="get-started-btn" onClick={() => navigate("/login")}>
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Welcome;


import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure you have this CSS file for styling

function Home() {
  return (
    <div className="home-container">
      {/* Navbar with small Sign In button */}
      <div className="navbar">
        <div className="logo">Pricebook</div>
        <Link to="/login" className="sign-in-btn">Sign In</Link>
      </div>

      {/* Welcome Text */}
      <h2 className="welcome-text">The Solution to Plan Your Groceries in Minutes</h2>

      {/* Get Started Button */}
      <button className="get-started-btn">Get Started</button>

      {/* Delivery Images Section */}
      <div className="delivery-images">
        <img src="/images/delivery.jpg" alt="Fast Delivery" className="delivery-img" />
        <img src="/images/fastest.jpg" alt="Fastest Service" className="delivery-img" />
      </div>
    </div>
  );
}

export default Home;
