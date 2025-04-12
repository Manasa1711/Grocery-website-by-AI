// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Fruits.css"; // Ensure you have this CSS file for styling

// function Fruits() {
//   const [search, setSearch] = useState("");
//   const [selectedFruit, setSelectedFruit] = useState(null);

//   // List of Fruits
//   const fruits = [
//     { name: "Apple", img: "/images/apple.jpg" },
//     { name: "Banana", img: "/images/banana.jpg" },
//     { name: "Grapes", img: "/images/grapes.jpg" },
//     { name: "Mango", img: "/images/mango.jpg" },
//     { name: "Orange", img: "/images/orange.jpg" },
//     { name: "Pineapple", img: "/images/pineapple.jpg" },
//     { name: "Strawberry", img: "/images/strawberry.jpg" },
//   ];

//   // Filter Fruits based on search input
//   const filteredFruits = fruits.filter((fruit) =>
//     fruit.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="fruits-container">
//       <nav className="navbar">
//         <h1>Fruits Page</h1>
//       </nav>

//       {/* Search Bar */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search for fruits..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Display only searched fruits */}
//       <div className="fruit-list">
//         {filteredFruits.length > 0 ? (
//           filteredFruits.map((fruit, index) => (
//             <div className="fruit-item" key={index} onClick={() => setSelectedFruit(fruit)}>
//               <img src={fruit.img} alt={fruit.name} />
//               <p>{fruit.name}</p>
//             </div>
//           ))
//         ) : (
//           <p>No matching fruits found</p>
//         )}
//       </div>

//       {/* Modal to Show Selected Fruit */}
//       {selectedFruit && (
//         <div className="fruit-modal" onClick={() => setSelectedFruit(null)}>
//           <div className="fruit-modal-content">
//             <img src={selectedFruit.img} alt={selectedFruit.name} />
//             <p>{selectedFruit.name}</p>
//           </div>
//         </div>
//       )}

//       <Link to="/" className="back-btn">Back to Home</Link>
//     </div>
//   );
// }

// export default Fruits;



// after adding price cart

// 


//training model
import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const fruitsData = [
  { name: "Apple", price: 50, image: "/images/apple.jpg" },
  { name: "Banana", price: 30, image: "/images/banana.jpg" },
  { name: "Grapes", price: 40, image: "/images/grapes.jpg" },
  { name: "Mango", price: 60, image: "/images/mango.jpg" },
  { name: "Orange", price: 35, image: "/images/orange.jpg" },
  { name: "Pineapple", price: 45, image: "/images/pineapple.jpg" },
  { name: "Strawberry", price: 70, image: "/images/strawberry.jpg" },
];

const Fruits = () => {
  const { addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");

  // 👇 Function to estimate price
  const estimatePrice = async (product, category) => {
    try {
      const response = await fetch("http://localhost:3001/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product, category }),
      });

      const data = await response.json();
      alert(`Estimated price of ${product} is ₹${data.estimated_price}`);
    } catch (err) {
      alert("Something went wrong while estimating the price.");
    }
  };

  return (
    <div style={{ backgroundColor: "#ffe6e6", padding: "20px" }}>
      <h2 style={{ backgroundColor: "green", color: "white", padding: "10px" }}>
        Fruits Page
      </h2>

      <input
        type="text"
        placeholder="Search for fruits..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "60%", padding: "10px", margin: "20px 0" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {fruitsData
          .filter((fruit) =>
            fruit.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((fruit, index) => (
            <div
              key={index}
              style={{
                width: "150px",
                textAlign: "center",
                background: "#fff",
                borderRadius: "10px",
                padding: "10px",
              }}
            >
              <img
                src={fruit.image}
                alt={fruit.name}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                }}
              />
              <p>{fruit.name}</p>
              <p>₹{fruit.price} / kg</p>

              <button
                onClick={() =>
                  addToCart({ ...fruit, quantity: 1, grams: 500 })
                }
              >
                Add to Cart
              </button>

              {/* ✅ New Estimate Button */}
              <button
                onClick={() => estimatePrice(fruit.name, "Fruit")}
                style={{ marginTop: "8px", backgroundColor: "#007bff", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px" }}
              >
                Estimate Price
              </button>
            </div>
          ))}
      </div>

      <br />
      <a
        href="/"
        style={{
          background: "red",
          color: "white",
          padding: "10px 20px",
          borderRadius: "5px",
          textDecoration: "none",
        }}
      >
        Back to Home
      </a>
    </div>
  );
};

export default Fruits;
