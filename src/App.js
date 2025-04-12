// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   // Simulating AI fetching price (Replace this with real API later)
//   const searchItem = () => {
//     const mockData = {
//       "milk": { store: "Blinkit", price: "₹50" },
//       "bread": { store: "Zepto", price: "₹40" },
//       "eggs": { store: "BigBasket", price: "₹60" }
//     };

//     setResult(mockData[search.toLowerCase()] || { store: "Not found", price: "--" });
//   };

//   return (
//     <div className="App">
//       <h1>Grocery Price Tracker</h1>
//       <input
//         type="text"
//         placeholder="Search for a grocery item..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={searchItem}>Search</button>

//       {result && (
//         <div>
//           <h3>Best Price:</h3>
//           <p>Store: {result.store}</p>
//           <p>Price: {result.price}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   // Mock price data (Replace with real API later)
//   const searchItem = () => {
//     const mockData = {
//       milk: { store: "Blinkit", price: "₹50" },
//       bread: { store: "Zepto", price: "₹40" },
//       eggs: { store: "BigBasket", price: "₹60" }
//     };

//     setResult(mockData[search.toLowerCase()] || { store: "Not found", price: "--" });
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <h1>Grocery Price Tracker</h1>
//       </nav>

//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search for grocery items..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={searchItem}>Search</button>
//       </div>

//       {result && (
//         <div className="result-box">
//           <h3>Best Price:</h3>
//           <p><strong>Store:</strong> {result.store}</p>
//           <p><strong>Price:</strong> {result.price}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   // Mock price data
//   const searchItem = () => {
//     const mockData = {
//       milk: { store: "Blinkit", price: "₹50" },
//       bread: { store: "Zepto", price: "₹40" },
//       eggs: { store: "BigBasket", price: "₹60" },
//     };

//     setResult(mockData[search.toLowerCase()] || { store: "Not found", price: "--" });
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <h1>Grocery Price Tracker</h1>
//       </nav>

//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search for grocery items..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={searchItem}>Search</button>
//       </div>

//       {result && (
//         <div className="result">
//           <p><strong>Store:</strong> {result.store}</p>
//           <p><strong>Price:</strong> {result.price}</p>
//         </div>
//       )}

//       <div className="categories">
//         <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
        
//         <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
//         <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
//       </div>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Veggies from "./Veggies"; // Import the new Veggies Page

// function App() {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   // Mock price data
//   const searchItem = () => {
//     const mockData = {
//       milk: { store: "Blinkit", price: "₹50" },
//       bread: { store: "Zepto", price: "₹40" },
//       eggs: { store: "BigBasket", price: "₹60" },
//     };

//     setResult(mockData[search.toLowerCase()] || { store: "Not found", price: "--" });
//   };

//   return (
//     <Router>
//       <div className="container">
//         <nav className="navbar">
//           <h1>Grocery Price Tracker</h1>
//         </nav>

//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <div className="search-box">
//                   <input
//                     type="text"
//                     placeholder="Search for grocery items..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <button onClick={searchItem}>Search</button>
//                 </div>

//                 {result && (
//                   <div className="result">
//                     <p><strong>Store:</strong> {result.store}</p>
//                     <p><strong>Price:</strong> {result.price}</p>
//                   </div>
//                 )}

//                 {/* Clickable Images */}
//                 <div className="categories">
//                   <Link to="/veggies">
//                     <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
//                   </Link>
//                   <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
//                   <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
//                 </div>
//               </>
//             }
//           />

//           {/* Veggies Page Route */}
//           <Route path="/veggies" element={<Veggies />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Veggies from "./Veggies"; 
// import Fruits from "./Fruits"; // Import Fruits Page

// function App() {
//   const [search, setSearch] = useState("");
//   const [result, setResult] = useState(null);

//   // Mock price data
//   const searchItem = () => {
//     const mockData = {
//       milk: { store: "Blinkit", price: "₹50" },
//       bread: { store: "Zepto", price: "₹40" },
//       eggs: { store: "BigBasket", price: "₹60" },
//     };

//     setResult(mockData[search.toLowerCase()] || { store: "Not found", price: "--" });
//   };

//   return (
//     <Router>
//       <div className="container">
//         <nav className="navbar">
//           <h1>Grocery Price Tracker</h1>
//         </nav>

//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <div className="search-box">
//                   <input
//                     type="text"
//                     placeholder="Search for grocery items..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <button onClick={searchItem}>Search</button>
//                 </div>

//                 {result && (
//                   <div className="result">
//                     <p><strong>Store:</strong> {result.store}</p>
//                     <p><strong>Price:</strong> {result.price}</p>
//                   </div>
//                 )}

//                 {/* Clickable Images */}
//                 <div className="categories">
//                   <Link to="/veggies">
//                     <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
//                   </Link>
//                   <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
//                   <Link to="/fruits">
//                     <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
//                   </Link>
                 
//                 </div>
//               </>
//             }
//           />

//           {/* Veggies Page Route */}
//           <Route path="/veggies" element={<Veggies />} />

//           {/* Fruits Page Route */}
//           <Route path="/fruits" element={<Fruits />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Veggies from "./Veggies"; 
// import Fruits from "./Fruits"; 
// import Beauty from "./Beauty"; // Import Beauty Page

// function App() {
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
//     <Router>
//       <div className="container">
//         <nav className="navbar">
//           <h1>Grocery Price Tracker</h1>
//         </nav>

//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <div className="search-box">
//                   <input
//                     type="text"
//                     placeholder="Search for grocery items..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <button onClick={searchItem}>Search</button>
//                 </div>

//                 {result && (
//                   <div className="result">
//                     <p><strong>Store:</strong> {result.store}</p>
//                     <p><strong>Price:</strong> {result.price}</p>
//                   </div>
//                 )}

//                 {/* Clickable Images */}
//                 <div className="categories">
//                   <Link to="/veggies">
//                     <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
//                   </Link>
//                   <Link to="/beauty">
//                     <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
//                   </Link>
//                   <Link to="/fruits">
//                     <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
//                   </Link>
//                 </div>
//               </>
//             }
//           />

//           {/* Page Routes */}
//           <Route path="/veggies" element={<Veggies />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/beauty" element={<Beauty />} /> {/* Added Beauty Page */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import "./App.css";
// import Veggies from "./Veggies"; 
// import Fruits from "./Fruits"; 
// import Beauty from "./Beauty"; 
// import ChatBox from "./ChatBox";  // Import the ChatBox

// function App() {
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
//     <Router>
//       <div className="container">
//         <nav className="navbar">
//           <h1>Grocery Price Tracker</h1>
//         </nav>

//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <div className="search-box">
//                   <input
//                     type="text"
//                     placeholder="Search for grocery items..."
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                   />
//                   <button onClick={searchItem}>Search</button>
//                 </div>

//                 {result && (
//                   <div className="result">
//                     <p><strong>Store:</strong> {result.store}</p>
//                     <p><strong>Price:</strong> {result.price}</p>
//                   </div>
//                 )}

//                 {/* Clickable Images */}
//                 <div className="categories">
//                   <Link to="/veggies">
//                     <img src="/images/veggie.jpg" alt="Veggies" className="category-img" />
//                   </Link>
//                   <Link to="/beauty">
//                     <img src="/images/beauty.jpg" alt="Beauty" className="category-img" />
//                   </Link>
//                   <Link to="/fruits">
//                     <img src="/images/fruits.jpg" alt="Fruits" className="category-img" />
//                   </Link>
//                 </div>
//               </>
//             }
//           />

//           {/* Page Routes */}
//           <Route path="/veggies" element={<Veggies />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/beauty" element={<Beauty />} />
//         </Routes>

//         {/* Include the ChatBox component (floating help option) */}
//         <ChatBox />
//       </div>
//     </Router>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Veggies from "./Veggies"; 
// import Fruits from "./Fruits"; 
// import Beauty from "./Beauty"; 
// import ChatBox from "./ChatBox";  
// import Login from "./Login";
// // import Home from "./Home"; 

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   return (
//     <Router>
//       <Routes>
//         {/* Show Login Page first if not logged in */}
//         {!isLoggedIn ? (
//           <Route path="*" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/veggies" element={<Veggies />} />
//             <Route path="/fruits" element={<Fruits />} />
//             <Route path="/beauty" element={<Beauty />} />
//           </>
//         )}
//       </Routes>

//       {/* Show ChatBox only after login */}
//       {isLoggedIn && <ChatBox />} 
//     </Router>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import "./App.css";
// import Veggies from "./Veggies"; 
// import Fruits from "./Fruits"; 
// import Beauty from "./Beauty"; 
// import ChatBox from "./ChatBox";  
// import Login from "./Login";


// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

//   return (
//     <Router>
//       <Routes>
//         {/* Show Login Page first */}
//         {!isLoggedIn ? (
//           <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         ) : (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/veggies" element={<Veggies />} />
//             <Route path="/fruits" element={<Fruits />} />
//             <Route path="/beauty" element={<Beauty />} />
//           </>
//         )}
//       </Routes>

//       {isLoggedIn && <ChatBox />} {/* Show ChatBox only after login */}
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div className="container">
//       <nav className="navbar">
//         <h1>Grocery Price Tracker</h1>
//       </nav>
//       <p>Welcome to the Grocery Price Tracker! Search for grocery prices.</p>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Veggies from "./Veggies";  // ✅ Importing Veggies
// import Fruits from "./Fruits";    // ✅ Importing Fruits
// import Beauty from "./Beauty"; 
//    // ✅ Importing Beauty

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/veggies" element={<Veggies />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/beauty" element={<Beauty />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";  // ✅ Import Login Page
// import Veggies from "./components/Veggies";
// import Fruits from "./components/Fruits";
// import Beauty from "./components/Beauty";
// import ChatBox from "./components/ChatBox";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />  {/* ✅ Login Route */}
//           <Route path="/veggies" element={<Veggies />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/beauty" element={<Beauty />} />
//         </Routes>
//         <ChatBox />  {/* Always visible */}
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Home from "./Home";
// import Login from "./Login";
// import Veggies from "./Veggies";
// import Fruits from "./Fruits";
// import Beauty from "./Beauty";
// import ChatBox from "./ChatBox";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <div>
//         <Routes>
//           {/* Redirect Home to Login if not authenticated */}
//           <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/veggies" element={<Veggies />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/beauty" element={<Beauty />} />
//         </Routes>

//         {/* Floating ChatBox - Always Visible
//         <ChatBox /> */}
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import Welcome from "./Welcome"; // Import the Welcome page
// import Home from "./Home";
// // import Login from "./Login";
// import Veggies from "./Veggies";
// import Fruits from "./Fruits";
// import Beauty from "./Beauty";
// import ChatBox from "./ChatBox";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Welcome />} />
//         {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}
//         <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
//         <Route path="/veggies" element={<Veggies />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/beauty" element={<Beauty />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

//working   ///////

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Veggies from "./Veggies";
// import Fruits from "./Fruits";
// import Beauty from "./Beauty";
// import ChatBox from "./ChatBox";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/veggies" element={<Veggies />} />
//         <Route path="/fruits" element={<Fruits />} />
//         <Route path="/beauty" element={<Beauty />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Veggies from "./Veggies";
// import Fruits from "./Fruits";
// import Beauty from "./Beauty";
// import ChatBox from "./ChatBox"; // Importing ChatBot

// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Main Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/veggies" element={<Veggies />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/beauty" element={<Beauty />} />
//         </Routes>

//         {/* ChatBot Component (Always Visible) */}
//         <ChatBox />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import Veggies from "./Veggies";
// import Fruits from "./Fruits";
// import Beauty from "./Beauty";


// function App() {
//   return (
//     <Router>
//       <div>
//         {/* Main Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/veggies" element={<Veggies />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/beauty" element={<Beauty />} />
//         </Routes>

        
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veggies from "./Veggies";
import Fruits from "./Fruits";
import Beauty from "./Beauty";
import Cart from "./Cart"; // we'll create this soon
import { CartProvider } from "./CartContext"; // new

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veggies" element={<Veggies />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

