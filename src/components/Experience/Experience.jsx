import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "../Experience/ExperienceTimeline.scss";

const timelineItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const experiencesList = [
  {
    company: "Verify Now",
    role: "Software Engineer Trainee",
    duration: "March 2024 - July 2024",
    description:
      "Worked on frontend and backend development projects, enhancing code quality and application performance.",
  },
  {
    company: "fxis.ai",
    role: "Fullstack Intern",
    duration: "January 2025 - March 2025",
    description:
      "Built scalable web applications and collaborated on UX improvements.",
  },
  {
    company: "MaMo TechnoLabs",
    role: "MERN Stack Trainee",
    duration: "April 2025 - Present",
    description:
      "Developing end-to-end MERN stack solutions with a focus on user experience and API design.",
  },
];

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Optional: Reset on scroll out
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="experience-section">
      {/* Header Section */}
      <motion.div
        className="header"
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        initial="hidden"
        animate={controls}
      >
        <h1>
          My <b>Experience</b>
        </h1>
        <p>A timeline of my professional journey so far.</p>
      </motion.div>

      {/* Timeline Items with Stagger */}
      <motion.div
        className="timeline"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
          hidden: {},
        }}
        initial="hidden"
        animate={controls}
      >
        {experiencesList.map((exp, index) => (
          <motion.div
            className="timelineItem"
            key={exp.company}
            custom={index}
            variants={timelineItemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <h2>{exp.company}</h2>
            <h3>{exp.role}</h3>
            <span>{exp.duration}</span>
            <p>{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
