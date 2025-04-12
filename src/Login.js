// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Login.css";

// // const Login = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   // Password Validation Function
// //   const validatePassword = (password) => {
// //     const minLength = /.{8,}/; // At least 8 characters
// //     const uppercase = /[A-Z]/; // At least one uppercase letter
// //     const lowercase = /[a-z]/; // At least one lowercase letter
// //     const number = /[0-9]/; // At least one number
// //     const specialChar = /[!@#$%^&*]/; // At least one special character

// //     return (
// //       minLength.test(password) &&
// //       uppercase.test(password) &&
// //       lowercase.test(password) &&
// //       number.test(password) &&
// //       specialChar.test(password)
// //     );
// //   };

// //   // Handle Login
// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     if (!validatePassword(password)) {
// //       alert(
// //         "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character (!@#$%^&*)."
// //       );
// //       return;
// //     }

// //     // Dummy Check
// //     if (email === "user@example.com" && password === "Password@123") {
// //       alert("Login Successful!");
// //       navigate("/");
// //     } else {
// //       alert("Invalid email or password!");
// //     }
// //   };

// //   // Handle Forgot Password
// //   const handleForgotPassword = () => {
// //     const userEmail = prompt("Enter your email to reset the password:");
// //     if (userEmail) {
// //       alert(`A password reset link has been sent to ${userEmail}`);
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       <form onSubmit={handleLogin}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <small>Password must be at least 8 characters with an uppercase, lowercase, number & special character.</small>
// //         <button type="submit">Login</button>
// //       </form>
      
// //       {/* Forgot Password */}
// //       <p className="forgot-password" onClick={handleForgotPassword}>
// //         Forgot Password?
// //       </p>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Redirect after login

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Simple authentication check
//     if (email === "admin@example.com" && password === "password") {
//       onLogin(); // Call the function passed as a prop
//       navigate("/"); // Redirect to Home Page
//     } else {
//       alert("Invalid credentials! Try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }


// export default Login;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Login.css";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [forgotPasswordEmail, setForgotPasswordEmail] = useState(""); // New state
//   const [showForgotPassword, setShowForgotPassword] = useState(false); // Toggle forgot password
//   const navigate = useNavigate();

//   // Password Validation Function
//   const validatePassword = (password) => {
//     const minLength = /.{8,}/; 
//     const uppercase = /[A-Z]/; 
//     const lowercase = /[a-z]/; 
//     const number = /[0-9]/; 
//     const specialChar = /[!@#$%^&*]/; 

//     return (
//       minLength.test(password) &&
//       uppercase.test(password) &&
//       lowercase.test(password) &&
//       number.test(password) &&
//       specialChar.test(password)
//     );
//   };

//   // Handle Login
//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!validatePassword(password)) {
//       alert(
//         "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character (!@#$%^&*)."
//       );
//       return;
//     }

//     // Dummy Check
//     if (email === "user@example.com" && password === "Password@123") {
//       alert("Login Successful!");
//       onLogin(); // Update state in App.js
//       navigate("/");
//     } else {
//       alert("Invalid email or password!");
//     }
//   };

//   // Handle Forgot Password Submission
//   const handleForgotPassword = () => {
//     if (forgotPasswordEmail) {
//       alert(`A password reset link has been sent to ${forgotPasswordEmail}`);
//       setShowForgotPassword(false); // Hide forgot password input
//     } else {
//       alert("Please enter your email.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <small>Password must be at least 8 characters with an uppercase, lowercase, number & special character.</small>
//         <button type="submit">Login</button>
//       </form>

//       {/* Forgot Password Section */}
//       <p className="forgot-password" onClick={() => setShowForgotPassword(true)}>
//         Forgot Password?
//       </p>

//       {showForgotPassword && (
//         <div className="forgot-password-box">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={forgotPasswordEmail}
//             onChange={(e) => setForgotPasswordEmail(e.target.value)}
//           />
//           <button onClick={handleForgotPassword}>Reset Password</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  // Password Validation
  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /[0-9]/;
    const specialChar = /[!@#$%^&*]/;

    return (
      minLength.test(password) &&
      uppercase.test(password) &&
      lowercase.test(password) &&
      number.test(password) &&
      specialChar.test(password)
    );
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character (!@#$%^&*)."
      );
      return;
    }

    // Dummy Check
    if (email === "user@example.com" && password === "Password@123") {
      alert("Login Successful!");
      onLogin(); // ✅ Update authentication state
      navigate("/"); // ✅ Redirect to Home
    } else {
      alert("Invalid email or password!");
    }
  };

  // Handle Forgot Password Submission
  const handleForgotPassword = () => {
    if (forgotPasswordEmail) {
      alert(`A password reset link has been sent to ${forgotPasswordEmail}`);
      setShowForgotPassword(false);
    } else {
      alert("Please enter your email.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <small>Password must be at least 8 characters with an uppercase, lowercase, number & special character.</small>
        <button type="submit">Login</button>
      </form>

      {/* Forgot Password Section */}
      <p className="forgot-password" onClick={() => setShowForgotPassword(true)}>
        Forgot Password?
      </p>

      {showForgotPassword && (
        <div className="forgot-password-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={forgotPasswordEmail}
            onChange={(e) => setForgotPasswordEmail(e.target.value)}
          />
          <button onClick={handleForgotPassword}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default Login;



// import React, { useState } from "react";
// import "./Login.css"; // ✅ Ensure CSS is imported

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert("Login functionality to be implemented!");
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p className="forgot-password">Forgot Password?</p>
//     </div>
//   );
// };

// export default Login;
