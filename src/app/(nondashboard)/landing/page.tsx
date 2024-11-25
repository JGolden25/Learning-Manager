"use client";

import React from 'react'
import { motion } from "framer-motion"
const Landing = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="landing"
    >Landing
    </motion.div>
  );
};

export default Landing;