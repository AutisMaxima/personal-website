"use client";

import { motion } from "framer-motion";

const FadeInWhenVisible = ({
  definedClass = "",
  children
}: {
  definedClass?: string
  children: React.ReactNode
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.9 }
      }}
      className={definedClass}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
