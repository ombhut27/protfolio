import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Barber Shop Landing",
    img: "/barber_1.png",
    desc: "A modern and responsive Barber Shop landing page built with React.js. Showcasing stylish grooming services, smooth animations, and a clean layout to enhance user experience and promote your brand effectively.",
    demo: "https://barber-shop-landing-page-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Plant selling site",
    img: "/plant_ecommerce.png",
    desc: "A comprehensive plant selling ecommerce site built with the MERN stack. Features include user-friendly browsing, secure checkout, product catalog management, and a fully responsive design for all devices.",
    demo: "https://eplant-frontend.onrender.com",
  },
  {
    id: 3,
    title: "ToDo List App",
    img: "/Todo.png",
    desc: "A simple and efficient ToDo List application built with React.js. It helps users organize tasks with easy add, edit, and delete functionality, featuring a clean and responsive interface.",
    demo: "https://to-do-list-five-chi-89.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
