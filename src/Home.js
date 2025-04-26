// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import "./Home.css"; // Add styles if needed

// const Home = () => {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   // Mock price data
//   const searchItem = () => {
//     const mockData = {
//       milk: { store: "Blinkit", price: "₹50" },
//       bread: { store: "Zepto", price: "₹40" },
//       eggs: { store: "BigBasket", price: "₹60" },
//       sugar: { store: "Amazon", price: "₹45" },
//       rice: { store: "Flipkart", price: "₹90" },
//     };

//     const trimmedSearch = search.toLowerCase().trim();
//     setResult(mockData[trimmedSearch] || { store: "Not found", price: "--" });
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <h1>Grocery Price Tracker</h1>
//       </nav>

//       {/* Search Box */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search for grocery items..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={searchItem}>Search</button>
//       </div>

//       {/* Search Result */}
//       {result && (
//         <div className="result">
//           <p><strong>Store:</strong> {result.store}</p>
//           <p><strong>Price:</strong> {result.price}</p>
//         </div>
//       )}

//       {/* Clickable Categories */}
//       <div className="categories">
//         <Link to="/veggies">
//           <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
//         </Link>
//         <Link to="/beauty">
//           <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
//         </Link>
//         <Link to="/fruits">
//           <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
//         </Link>
//       </div>

    
//     </div>
//   );
// };

// export default Home;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const searchItem = () => {
    const mockData = {
      milk: { store: "Blinkit", price: "₹50" },
      bread: { store: "Zepto", price: "₹40" },
      eggs: { store: "BigBasket", price: "₹60" },
      sugar: { store: "Amazon", price: "₹45" },
      rice: { store: "Flipkart", price: "₹90" },
    };

    const trimmedSearch = search.toLowerCase().trim();
    setResult(mockData[trimmedSearch] || { store: "Not found", price: "--" });
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Grocery Price Tracker  </h1>
        <Link to="/cart" className="cart-link">
  🛒 Cart
</Link>

      </nav>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for grocery items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchItem}>Search</button>
      </div>

      {/* Search Result */}
      {result && (
        <div className="result">
          <p><strong>Store:</strong> {result.store}</p>
          <p><strong>Price:</strong> {result.price}</p>
        </div>
      )}

      {/* Clickable Categories */}
      <div className="categories">
        <Link to="/veggies">
          <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
        </Link>
        <Link to="/beauty">
          <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
        </Link>
        <Link to="/fruits">
          <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
        </Link>
      </div>

      {/* Chatbot Button */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a
          href="https://chatbot.hellotars.com/conv/Kg8zRy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Chat with Assistant 🤖
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
