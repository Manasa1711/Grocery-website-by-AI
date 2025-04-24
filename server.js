// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const otpService = require("./otpService");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// let users = { "user@example.com": { password: "123456", otp: null } };

// // **Login API**
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     if (users[email] && users[email].password === password) {
//         res.json({ success: true, message: "Login successful!" });
//     } else {
//         res.json({ success: false, message: "Invalid credentials" });
//     }
// });

// // **Forgot Password - Send OTP**
// app.post("/forgot-password", (req, res) => {
//     const { email } = req.body;
//     if (users[email]) {
//         users[email].otp = otpService.generateOTP();
//         res.json({ success: true, message: "OTP sent to email", otp: users[email].otp });
//     } else {
//         res.json({ success: false, message: "Email not found" });
//     }
// });

// // **Verify OTP**
// app.post("/verify-otp", (req, res) => {
//     const { email, otp } = req.body;
//     if (users[email] && users[email].otp === otp) {
//         res.json({ success: true, message: "OTP Verified! Set a new password." });
//     } else {
//         res.json({ success: false, message: "Invalid OTP" });
//     }
// });

// app.listen(5000, () => console.log("Backend running on port 5000"));

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Other routes...
app.post('/api/chat', (req, res) => {
  // chatbot logic
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
