import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
// import desktopLogo from "../images/logo.png";
import mobileLogo from "../images/raiona.png";

export default function Navbar({ style }) {
  const [isMobile, setIsMobile] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const onMount = useRef(true);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (onMount.current) {
      handleResize();
      onMount.current = false;
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNav = () => setShowNav(false);

  return (
    <header className={styles.header} style={style}>
      {/* <div className={styles.logo} /> */}
      <Link href="/">
        <img
          // src={isMobile ? mobileLogo : desktopLogo}
          src={mobileLogo}
          slt="logo"
          className={styles.logo}
        />
      </Link>

      {isMobile ? (
        <div style={{ position: "relative" }}>
          {showNav && (
            <Nav>
              <Navlink to="/" txt="Home" />
              <Navlink to="/about" txt="About us" />
              <Navlink to="/funds" txt="Investment Funds" />
              <Navlink to="/teams" txt="Team" />
              <Navlink to="/contact" txt="Contact" />
            </Nav>
          )}
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={() => setShowNav(!showNav)}>
            <Burger />
          </button>
        </div>
      ) : (
        <>
          <Nav>
            <Navlink to="/" txt="Home" onClick={closeNav} />
            <Navlink to="/about" txt="About Us" onClick={closeNav} />
            <Navlink to="/funds" txt="Investment Funds" onClick={closeNav} />
            <Navlink to="/teams" txt="Team" onClick={closeNav} />
            <Navlink to="/contact" txt="Contact" onClick={closeNav} />
          </Nav>

          {/* <Link href="/contact"> */}
          {/* <button
              style={{ border: "none", background: "none", cursor: "pointer" }}
              onClick={() => setShowNav(!showNav)}> */}
          <SignUp />
          {/* </button> */}
          {/* </Link> */}
        </>
      )}
    </header>
  );
}

function Nav({ children }) {
  return (
    <nav className={styles.nav}>
      <ul>{children}</ul>
    </nav>
  );
}

function Navlink({ to, txt, onClick }) {
  return (
    <li className={styles.link} onClick={onClick}>
      <Link href={to}>{txt}</Link>
    </li>
  );
}

function Burger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={styles.burger}>
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  );
}

function SignUp() {
  return (
    <Link href="/contact">
      <button className={styles.signUpButton}>Sign Up</button>
    </Link>
  );
}
