import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./loginpageexpert.module.css";
import axios from "axios";

const LoginPageExpert = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        `${apiKey}/expert/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;

      if (response.status === 200) {
        // Бәрі норм
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("fname", data.fname);
        // Success message (optional)
        setMessage(data.message);
        // Redirect to the main page
        navigate("/expert");
      } else {
        // Authentication error, display error message
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Қате орнады", error);
      setMessage("Кіру барысында бірбәле бұзылды ((");
    }
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.form_container}>
        <form className={styles.form_login} onSubmit={handleSubmit}>
          <h1>Кіру</h1>
          <input
            className={styles.form_input}
            type="email"
            placeholder="Электронды пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.form_input}
            type="password"
            placeholder="Құпиясөз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className={styles.form_button} type="submit">
            Кіру
          </button>
          {message && <p className={styles.form_error}>{message}</p>}
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
