import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";

const TokenPage = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleCheckToken() {
    if (!token.trim()) {
      setError("Enter a valid token");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/patient/patient/validate-token/${token}/`
      );
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        navigate("/patient", { state: { patient: data } });
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Invalid token.");
      }
    } catch (err) {
      console.error("Error while validating token:", err);
      setError("Server error. Please try again later.");
    }
  }

  return (
   <>
    <Header/>
    <div className="token-check">
    <h2>Enter your appointment token</h2>
    <input
        type="text"
        placeholder="Enter your token"
        value={token}
        onChange={(e) => {
          setToken(e.target.value);
          setError("");
        }}
      />
      <button type="submit" onClick={handleCheckToken}>
        Verify Token
      </button>
    </div>
    </>
  );
};

export default TokenPage;
