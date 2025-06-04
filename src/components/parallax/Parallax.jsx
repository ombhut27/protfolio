import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Determine the main heading text based on type
  const getHeadingText = () => {
    if (type === "services") return "What We Offer?";
    if (type === "task") return "What I’ve Done";
    if (type === "task1") return "What I Bring";
    if (type === "portfolio") return "What We Did?";
    return "What We Did?"; // default fallback
  };

  // Determine background gradient based on type
  const backgroundStyle =
    type === "services"
      ? "linear-gradient(180deg, #111132, #0c0c1d)"
      : "linear-gradient(180deg, #111132, #505064)";

  // Determine background image for planets/sun
  const backgroundImage =
    type === "services" ? "/planets.png" : "/sun.png";

  return (
    <div className="parallax" ref={ref} style={{ background: backgroundStyle }}>
      <motion.h1 style={{ y: yText }}>{getHeadingText()}</motion.h1>

      <motion.div className="mountains"></motion.div>

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></motion.div>

      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
