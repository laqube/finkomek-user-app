import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./registrationpage.module.css";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Сброс сообщения перед отправкой формы

    try {
      const response = await axios.post(
        `${apiKey}/user/register`,
        {
          email,
          password,
          fname,
          lname,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Registration successful! You can now login.");
        setEmail("");
        setPassword("");
        setFname("");
        setLname("");
        navigate("/auth/login");
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Тіркелу барысында қате орнады!", error);
      setMessage("Failed to register due to an error.");
    }
  };

  return (
    <div className={styles.page_container}>
      <div className={styles.form_container}>
        <form className={styles.form_login} onSubmit={handleSubmit}>
          <h1>Тіркелу</h1>
          <input
            className={styles.form_input}
            type="name"
            placeholder="Аты"
            value={email}
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            className={styles.form_input}
            type="surname"
            placeholder="Тегі"
            value={email}
            onChange={(e) => setLname(e.target.value)}
          />
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
            Тіркелу
          </button>
          <p>
            Тіркелгі бар ма?{" "}
            <Link to="/" style={{ color: "#007bff" }}>
              Кіру
            </Link>
          </p>
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

export default LoginPage;
