import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Circle = (props) => {
  const { numbers } = props;

  return (
    <Link
      to={{
        pathname: "/game",
        state: numbers,
      }}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="circle gray"
        numbers={numbers}
      >
        <h1>{numbers}</h1>
      </motion.div>
    </Link>
  );
};

export default Circle;
