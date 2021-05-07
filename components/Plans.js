import { Children } from "react";
import { plansData } from "../data/plans";
import kingPicture from "../images/plans/king.png";
import queenPicture from "../images/plans/queen.png";
import bishopPicture from "../images/plans/bishop.png";
import knightPicture from "../images/plans/knight.png";
import styles from "../styles/Planner.module.css";

export default function Plans() {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "70px",
        marginBottom: "70px",
        justifyContent: "space-evenly",
      }}>
      {Children.toArray(
        plansData.map((x) => (
          <Plan
            title={x.title}
            description={x.description}
            type={x.type}
            // picture={x.picture}
            Icon={x.Svg}
          />
        ))
      )}
    </div>
  );
}

const cardStyles = {
  width: "320px",
  height: "256px",
  padding: "20px",
  boxShadow: "0 0 2px 1px var(--nice-gold)",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  borderRadius: "5px",
};

const spanStyle = {
  fontSize: "9px",
  lineHeight: "18px",
  color: "gray",
  letterSpacing: ".5px",
};

const pTagStyle = {
  color: "#cca354",
  fontWeight: "900",
  fontSize: "20px",
};

export function Plan({ title, description, type, picture, Icon }) {
  return (
    <div style={cardStyles} className={styles.planItem}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "42px",
        }}>
        {picture && <img src={picture} alt="king" />}
        {Icon && <Icon />}

        <p style={{ ...pTagStyle, margin: "0" }}>
          <span style={spanStyle}>{type}</span>
          <br />
          {title}
        </p>
      </div>
      <center>
        <p style={{ color: "white" }}>
          <small>{description}</small>
        </p>
      </center>
    </div>
  );
}
