const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const otpService = require("./otpService");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let users = { "user@example.com": { password: "123456", otp: null } };

// **Login API**
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (users[email] && users[email].password === password) {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.json({ success: false, message: "Invalid credentials" });
    }
});

// **Forgot Password - Send OTP**
app.post("/forgot-password", (req, res) => {
    const { email } = req.body;
    if (users[email]) {
        users[email].otp = otpService.generateOTP();
        res.json({ success: true, message: "OTP sent to email", otp: users[email].otp });
    } else {
        res.json({ success: false, message: "Email not found" });
    }
});

// **Verify OTP**
app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    if (users[email] && users[email].otp === otp) {
        res.json({ success: true, message: "OTP Verified! Set a new password." });
    } else {
        res.json({ success: false, message: "Invalid OTP" });
    }
});

app.listen(5000, () => console.log("Backend running on port 5000"));
