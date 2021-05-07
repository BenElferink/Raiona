import { useState, useEffect, useRef, Children } from "react";
import styles from "../styles/Form.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({});

  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input
        name="name"
        placeholder="Full name"
        onChange={changeHandler}
        className={styles.inp}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={changeHandler}
        className={styles.inp}
      />
      <textarea
        name="message"
        placeholder="Message"
        onChange={changeHandler}
        className={styles.msg}
      />
      <button type="sybmit" className={styles.btn}>
        Submit
      </button>
    </form>
  );
}
