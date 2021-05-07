import React, { useEffect, useRef } from "react";
import styles from "../styles/Banner.module.css";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";
import deskTopImage from "../images/logo.png";

function Banner() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current && videoRef.current.play();
    }, 0);
  }, [isDesktop]);

  return isDesktop ? (
    <article>
      <video
        style={{ position: "fixed" }}
        ref={videoRef}
        loop
        muted
        playsInline
        style={{
          width: "69%",
          boxShadow: "0 0 1rem 0.7rem black",
        }}>
        <source src="/videos/bannerVid.mp4" />
      </video>
      <div className={styles.overlay}>
        <BannerText />
      </div>
    </article>
  ) : (
    <div className={styles.banner}>
      <div>
        <Link href="/contact">
          <button className={styles.btn}>Sign up</button>
        </Link>
      </div>
      <div />
    </div>
  );
}

function BannerText() {
  return (
    <center style={{ padding: "0 69px" }}>
      <img src={deskTopImage} alt="logo" />
    </center>
  );
}

export default Banner;
