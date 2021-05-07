import { useState, Children, useEffect } from "react";
import styles from "../styles/Teams.module.css";
import { teamPeople } from "../data/teams.js";

export default function TeamsSection() {
  return (
    <div className={styles.teamWrapper}>
      {Children.toArray(
        teamPeople.map((person) => (
          <Person
            name={person.name}
            position={person.position}
            src={person.src}
            ModalText={person.ModalText}
          />
        ))
      )}
    </div>
  );
}

function Person({ src, name, position, ModalText }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={styles.person}
      onClick={() => setIsFlipped((prev) => !prev)}
      style={{
        transform: isFlipped ? "rotateY(360deg)" : "rotateY(0deg)",
      }}>
      {isFlipped ? (
        <>
          <h5>{name}</h5>
          {ModalText()}
        </>
      ) : (
        <>
          <img src={src} alt="team_member" />
          <h5>{name}</h5>
          <h6>{position}</h6>
        </>
      )}
    </div>
  );
}
