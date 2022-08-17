import React, { Component } from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedTransitions from "../components/AnimatedTransitions";
import { motion } from "framer-motion/dist/framer-motion";

const MainMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Router>
        <Sidebar />
        <AnimatedTransitions />
      </Router>
    </motion.div>
  );
};

export default MainMenu;
