import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Beauty.css"; // Ensure you have this CSS file for styling

function Beauty() {
  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  // Updated list of Beauty Products
  const beautyProducts = [
    { name: "Sunscreen", img: "/images/sunscreen.jpg" },
    { name: "Moisturizer", img: "/images/moisturizer.jpg" },
    { name: "Simple Face Wash", img: "/images/simple_facewash.jpg" },
    { name: "Aqualogica Lip Balm", img: "/images/aqualogica_lipbalm.jpg" },
  ];

  // Filter products based on search input
  const filteredProducts = beautyProducts.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="beauty-container">
      <nav className="navbar">
        <h1>Beauty Products</h1>
      </nav>

      {/* Search Bar */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for beauty products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Display only searched items */}
      <div className="beauty-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div className="beauty-item" key={index} onClick={() => setSelectedItem(item)}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))
        ) : (
          <p>No matching products found</p>
        )}
      </div>

      {/* Modal to Show Selected Item */}
      {selectedItem && (
        <div className="beauty-modal" onClick={() => setSelectedItem(null)}>
          <div className="beauty-modal-content">
            <img src={selectedItem.img} alt={selectedItem.name} />
            <p>{selectedItem.name}</p>
          </div>
        </div>
      )}

      <Link to="/" className="back-btn">Back to Home</Link>
    </div>
  );
}

export default Beauty;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Beauty.css"; // Ensure you have this CSS file for styling

// function Beauty() {
//   const [search, setSearch] = useState("");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [cart, setCart] = useState([]);

//   // List of Beauty Products
//   const beautyProducts = [
//     { name: "Sunscreen", img: "/images/sunscreen.jpg" },
//     { name: "Moisturizer", img: "/images/moisturizer.jpg" },
//     { name: "Simple Face Wash", img: "/images/simple_facewash.jpg" },
//     { name: "Aqualogica Lip Balm", img: "/images/aqualogica_lipbalm.jpg" },
//   ];

//   // Filter products based on search input
//   const filteredProducts = beautyProducts.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Function to add item to cart
//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <div className="beauty-container">
//       <nav className="navbar">
//         <h1>Beauty Products</h1>
//       </nav>

//       {/* Search Bar */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search for beauty products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Display only searched items */}
//       <div className="beauty-list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((item, index) => (
//             <div className="beauty-item" key={index}>
//               <img src={item.img} alt={item.name} />
//               <p>{item.name}</p>
//               <button onClick={() => addToCart(item)}>Add to Cart</button>
//             </div>
//           ))
//         ) : (
//           <p>No matching products found</p>
//         )}
//       </div>

//       {/* Cart Section */}
//       <div className="cart">
//         <h2>Cart</h2>
//         {cart.length > 0 ? (
//           cart.map((item, index) => (
//             <div className="cart-item" key={index}>
//               <img src={item.img} alt={item.name} />
//               <p>{item.name}</p>
//             </div>
//           ))
//         ) : (
//           <p>Cart is empty</p>
//         )}
//       </div>

//       <Link to="/" className="back-btn">Back to Home</Link>
//     </div>
//   );
// }

// export default Beauty;
