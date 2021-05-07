import React, { Children } from "react";
import { aboutSections } from "../data/about.js";
import styles from "../styles/About.module.css";

export default function AboutSection() {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <section className={styles.aboutSection}>
      {Children.toArray(
        aboutSections.map((x, i) =>
          i % 2 === 0 ? (
            <LeftText
              whiteTitle={x.whiteTitle}
              accentTitle={x.accentTitle}
              subTitle={x.subTitle}
              Description={x.Description}
              src={x.image}
            />
          ) : (
            <RightText
              whiteTitle={x.whiteTitle}
              accentTitle={x.accentTitle}
              subTitle={x.subTitle}
              Description={x.Description}
              src={x.image}
            />
          )
        )
      )}
    </section>
  );
}

function LeftText({ whiteTitle, accentTitle, subTitle, Description, src }) {
  return (
    <article className={styles.articleLeft}>
      <div className={styles.articleTxt}>
        <h2>
          <span style={{ color: "var(--nice-gold)" }}>{accentTitle}</span>
          &nbsp;{whiteTitle}
        </h2>
        {subTitle && <h3>{subTitle}</h3>}
        {Description()}
      </div>

      <div className={styles.shadow} />
      <img src={src} alt="ai" />
    </article>
  );
}

function RightText({ whiteTitle, accentTitle, subTitle, Description, src }) {
  return (
    <article className={styles.articleRight}>
      <div className={styles.shadow} />
      <img src={src} alt="ai" />

      <div className={styles.articleTxt}>
        <h2>
          <span style={{ color: "var(--nice-gold)" }}>{accentTitle}</span>
          &nbsp;{whiteTitle}
        </h2>
        {subTitle && <h3>{subTitle}</h3>}
        {Description()}
      </div>
    </article>
  );
}
