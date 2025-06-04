import { useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 60 },
  }),
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [currentPage, setCurrentPage] = useState(0);

  const serviceList = [
    {
      title: "Frontend Development",
      description:
        "Crafting beautiful, responsive, and performant interfaces using React, Ract Native or NextJs.",
    },
    {
      title: "Backend Development",
      description:
        "Building scalable and secure APIs and server-side applications with Node.js or Python.",
    },
    {
      title: "Fullstack Development",
      description:
        "Combining frontend and backend expertise to deliver end-to-end web solutions.",
    },
    {
      title: "Website Design",
      description:
        "Designing clean, modern, and user-friendly websites tailored to your brand’s identity.",
    },
    {
      title: "SEO Optimization",
      description:
        "Improving your website ranking on search engines through proven strategies.",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(serviceList.length / itemsPerPage);

  const currentServices = serviceList.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <motion.section
      className="services"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
      style={{ marginTop: "50px" }}
    >
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Our <b>Services</b>
        </h1>
        <p>
          We offer professional solutions to help your business thrive in the
          digital world.
        </p>
      </motion.div>

      <div className="servicesGrid">
        {currentServices.map((service, index) => (
          <motion.div
            className="serviceCard"
            key={service.title}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateZ: 1 }}
          >
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Dot Pagination */}
      <div className="dotsContainer">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(i)}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
