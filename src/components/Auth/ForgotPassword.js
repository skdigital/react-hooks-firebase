import React from "react";

function ForgotPassword() {
  return (
    <div>
      <input
        type="email"
        className="input"
        placeholder="Provide your account email"
      />
      <div>
        <button className="button">Reset Password</button>
      </div>
    </div>
  );
}

export default ForgotPassword;
