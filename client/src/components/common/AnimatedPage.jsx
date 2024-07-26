import { motion } from "framer-motion";

// 페이지 애니메이션 컴포넌트
function AnimatedPage({ children }) {
  // Blur Animation
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
