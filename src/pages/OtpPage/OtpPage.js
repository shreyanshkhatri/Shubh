import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/login.css";
import img1 from "../../assets/Apple-Logosu.png";
import img2 from "../../assets/Group 24.svg";
import img3 from "../../assets/Rectangle 2.png";

const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [isExpired, setIsExpired] = useState(false);
  const [remainingTime, setRemainingTime] = useState(30);
  const navigate = useNavigate();

  const otpData = JSON.parse(localStorage.getItem("otpData"));
  const storedOtp = otpData ? otpData.otp : null;
  const email = otpData ? otpData.email : null;
  const timestamp = otpData ? otpData.timestamp : null;

  useEffect(() => {
    if (timestamp) {
      const expiryTime = 30 * 1000;
      const elapsedTime = new Date().getTime() - timestamp;

      if (elapsedTime > expiryTime) {
        setIsExpired(true);
      } else {
        const timerInterval = setInterval(() => {
          const timeLeft =
            expiryTime - elapsedTime - (new Date().getTime() - timestamp);
          setRemainingTime(Math.max(Math.floor(timeLeft / 1000), 0));
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            setIsExpired(true);
          }
        }, 1000);
      }
    }
  }, [timestamp]);

  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (isExpired) {
      alert("OTP has expired. Please resend it.");
      navigate("/");
      return;
    }

    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    if (otp === storedOtp) {
      alert("OTP verified successfully!");
      navigate("/dashboard");
    } else {
      alert("Invalid OTP. Please try again.");
      navigate("/");
    }
  };

  const handleResendOtp = () => {
    localStorage.removeItem("otpData");
    navigate("/");
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
          <h2>Enter OTP</h2>

          <form id="form" onSubmit={handleVerifyOtp}>
            <input
              className="input"
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              disabled={isExpired}
            />
            <button
              type="submit"
              className="otpButton"
              id="verifyOtp"
              disabled={isExpired}
            >
              Verify OTP
            </button>
            {!isExpired && (
              <p className="timer">Time remaining: {remainingTime}s</p>
            )}

            {isExpired && (
              <>
                <p className="expiredMessage">
                  OTP has expired. Please resend it.
                </p>
                <button
                  onClick={handleResendOtp}
                  id="resendOtp"
                  className="otpButton"
                >
                  Resend OTP
                </button>
              </>
            )}
          </form>
          <div className="otp"></div>

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

export default OtpPage;
