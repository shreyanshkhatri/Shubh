import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import img1 from "../../assets/Apple-Logosu.png"
import img2 from "../../assets/Group 24.svg";
import img3 from "../../assets/Rectangle 2.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleSendOtp = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email address.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const otp = generateOtp();
    alert(`Your OTP is: ${otp}`); 

    const otpData = {
      otp,
      email,
      timestamp: new Date().getTime(), 
    };

    localStorage.setItem("otpData", JSON.stringify(otpData));
    navigate("/otp");
  };

  return (
    <div>
      <div className="header">
        <h1>Your Logo</h1>
      </div>

      <div className="container">
        <div className="leftContainer">
          <h1>Sign in to</h1>
          <h2>Lorem ipsum is simply.</h2>

          <p>If you don't have an account register</p>
          <p>
            You can <span className="register">Register here!</span>
          </p>
        </div>

        <div className="rightContainer">
          <h2>Sign in</h2>

          <form id="form">
            <input
            className="input"
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendOtp} id="sendOtp" className="otpButton">
              Send OTP
            </button>
          </form>

          <p className="continue">or continue with</p>

          <div className="imgContainer">
            <img src={img1} alt="" id="apple" />
            <img src={img2} alt="" id="google" />
          </div>
        </div>

        <img src={img3} alt="" id="backlogo" />
      </div>
    </div>
  );
};

export default Login;


