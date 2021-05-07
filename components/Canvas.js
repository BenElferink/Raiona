import Particles from "react-particles-js";

export default function Canvas() {
  const particles = {
    number: {
      value: 42,
    },
    color: {
      value: "#ffd700",
    },
    opacity: {
      value: 0.7,
    },
    size: {
      value: 5,
      anim: {
        enable: true,
        speed: 15,
      },
    },
    move: {
      enable: true,
      speed: 1,
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#fbfcd4",
      opacity: 0.5,
      width: 0.5,
    },
  };

  const interactivity = {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 250,
        line_linked: {
          opacity: 1,
        },
      },
    },
  };

  const retina_detect = true;

  const particleStyles = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "-1",
  };

  return (
    <Particles
      style={particleStyles}
      params={{ particles, interactivity, retina_detect }}
    />
  );
}
