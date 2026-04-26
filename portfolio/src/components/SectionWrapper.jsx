import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
