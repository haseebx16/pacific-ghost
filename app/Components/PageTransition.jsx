"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const PageTransition = ({ onAnimationComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: '0%' });
  }, [controls]);

  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={controls}
      exit={{ x: '100%' }}
      transition={{ duration: 0.7 }}
      onAnimationComplete={onAnimationComplete}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      
    >
        <img
            src="/logo-coastal.png"
            alt="Logo"
            style={{
            width: "800px",
            height: "auto",
            }}
        />
  </motion.div>
  );
};

export default PageTransition;