import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion';
const FeatureHead = ({ heading, message }) => {
  return (
    <div className="text-center mb-12">
      <motion.h3
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold mb-4"
      >
        {heading}
      </motion.h3>
      <motion.p
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-gray-600"
      >
        {message}{' '}
      </motion.p>
    </div>
  );
};

export default FeatureHead;
