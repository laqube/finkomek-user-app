import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./loginpageexpert.module.css";

const LoginPageExpert = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("http://localhost:8181/expert/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Успешная аутентификация, сохраняем токен
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("fname", data.fname);
        // Сообщение об успехе (опционально)
        setMessage(data.message);
        // Перенаправление на главную страницу
        navigate("/");
      } else {
        // Ошибка аутентификации, отображаем сообщение об ошибке
        setMessage(data.message);
      }
    } catch (error) {
      console.error("There was an error!", error);
      setMessage("Failed to login due to an error.");
    }
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.form_container}>
        <form className={styles.form_login}>
          <input
            className={styles.form_input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.form_input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <p className={styles.form_error}>{message}</p>}
          <button className={styles.form_button} type="submit">
            Login
          </button>
        </form>
      </div>
      <div className={styles.banner_container}>
        <img
          alt="banner"
          src="/assets/auth_banner.png"
          className={styles.banner_image}
        />
      </div>
    </div>
  );
};

export default LoginPageExpert;
