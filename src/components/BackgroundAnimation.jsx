import Particles from "react-tsparticles";

export default function BackgroundAnimation() {
  return (
    <Particles
      options={{
        fullScreen: false,
        fpsLimit: 60,
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 40, density: { enable: true, area: 900 } },
          color: { value: "#7c3aed" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          links: {
            enable: true,
            distance: 120,
            color: "#7c3aed",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: "bounce",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 120, duration: 0.6 } },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
