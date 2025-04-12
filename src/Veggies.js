// import React from "react";
// import { Link } from "react-router-dom";
// import "./Veggies.css"; // Ensure you have this CSS file for styling

// function Veggies() {
//   return (
//     <div className="veggies-container">
//       <nav className="navbar">
//         <h1>Veggies Page</h1>
//       </nav>

//       <div className="veggie-list">
//         <div className="veggie-item">
//           <img src="/images/tomato.jpg" alt="Tomato" />
//           <p>Tomato</p>
//         </div>
//         <div className="veggie-item">
//           <img src="/images/carrot.jpg" alt="Carrot" />
//           <p>Carrot</p>
//         </div>
//         <div className="veggie-item">
//           <img src="/images/Brocoli.jpg" alt="Brocoli" />
//           <p>Brocoli</p>
//         </div>
//         <div className="veggie-item">
//           <img src="/images/Pumpkin.jpg" alt="Pumpkin" />
//           <p>Pumpkin</p>
//         </div>
//         <div className="veggie-item">
//           <img src="/images/Radish.jpg" alt="Radish" />
//           <p>Radish</p>
//         </div>
//         <div className="veggie-item">
//           <img src="/images/Spinach.jpg" alt="spinach" />
//           <p>spinach</p>
//         </div>
//         <div className="veggie-item">
//           <img src="/images/cucumber.jpg" alt="Cucumber" />
//           <p>Cucumber</p>
//         </div>
//       </div>

//       <Link to="/" className="back-btn">Back to Home</Link>
//     </div>
//   );
// }

// export default Veggies;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Veggies.css"; // Ensure you have this CSS file for styling

function Veggies() {
  const [search, setSearch] = useState("");

  // List of veggies
  const veggies = [
    { name: "Tomato", img: "/images/tomato.jpg" },
    { name: "Carrot", img: "/images/carrot.jpg" },
    { name: "Broccoli", img: "/images/Brocoli.jpg" },
    { name: "Pumpkin", img: "/images/Pumpkin.jpg" },
    { name: "Radish", img: "/images/Radish.jpg" },
    { name: "Spinach", img: "/images/Spinach.jpg" },
    { name: "Cucumber", img: "/images/cucumber.jpg" },
  ];

  // Filter veggies based on search input
  const filteredVeggies = veggies.filter((veggie) =>
    veggie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="veggies-container">
      <nav className="navbar">
        <h1>Veggies Page</h1>
      </nav>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for veggies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Display only searched veggies */}
      <div className="veggie-list">
        {filteredVeggies.length > 0 ? (
          filteredVeggies.map((veggie, index) => (
            <div className="veggie-item" key={index}>
              <img src={veggie.img} alt={veggie.name} />
              <p>{veggie.name}</p>
            </div>
          ))
        ) : (
          <p>No matching veggies found</p>
        )}
      </div>

      <Link to="/" className="back-btn">Back to Home</Link>
    </div>
  );
}

export default Veggies;


