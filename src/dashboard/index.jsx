import AddResume from "./components/AddResume";
import { motion } from "framer-motion";
const Dashboard = () => {
  const Animate = {
    initial: {
      opacity: 0,
      x: -200,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <motion.h2
        variants={Animate}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.3 }}
        className="font-semibold text-3xl font-bold"
      >
        My Resume
      </motion.h2>
      <motion.p
        variants={Animate}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.6 }}
      >
        Start Creating your resume .
      </motion.p>
      <motion.div
        variants={Animate}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        <AddResume />
      </motion.div>
    </div>
  );
};

export default Dashboard;
