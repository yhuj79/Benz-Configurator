import { motion } from "framer-motion";

function AnimatedPage({ children }) {
  const pageVariants = {
    initial: { filter: "blur(10px)", opacity: 0 },
    animate: { filter: "blur(0px)", opacity: 1 },
    exit: { filter: "blur(10px)", opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
