import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2  variants={textVariants}>OM BHUT</motion.h2>
          <motion.h1  variants={textVariants}>
            Web developer and UI designer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              href="#Portfolio"
              variants={textVariants}
              whileHover={{
                scale: 1.05,
                rotate: -1.5,
                textShadow: '0px 0px 8px rgba(0, 191, 255, 0.8)',
                background: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '18px',
                transition: 'all 0.3s ease',
              }}
            >
              See the Latest Works
            </motion.a>

            <motion.a
              href="#Contact"
              variants={textVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1.5,
                textShadow: '0px 0px 8px rgba(0, 191, 255, 0.8)',
                background: 'linear-gradient(90deg, #00BFFF, #1E90FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '18px',
                transition: 'all 0.3s ease',
              }}
            >
              Contact Me
            </motion.a>

          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Problem Solver Tech Enthusiast
      </motion.div>
      <div className="imageContainer">
        <img src="/hero_2.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
