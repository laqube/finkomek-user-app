import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Perform login logic, then dispatch login action
    dispatch(login({ role: "student" }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login as Student</button>
    </div>
  );
};

export default LoginPage;
