import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../Skill/Skill.scss";

const skills = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "https://unpkg.com/simple-icons@v9/icons/css3.svg" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  {
    name: "AWS",
    icon: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
  },
  { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotate: -10 },
  show: { opacity: 1, y: 0, rotate: 0 },
};

const Skill = () => {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="skills-section"
        key={key}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech <b>Stack</b>
        </motion.h2>

        <motion.p
          className="skills-slogan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          A collection of technologies I rely on to build modern, scalable web applications
        </motion.p>

        <motion.div
          className="skill-container"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill) => (
            <motion.div
              className="skill-item"
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon-wrapper">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skill;
