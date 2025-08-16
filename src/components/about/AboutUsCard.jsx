import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion';
const AboutUsCard = ({ feature }) => {
  return (
    <motion.div
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      whileInView="show"
      className="flex flex-col justify-center items-center"
    >
      <div
        className="w-15 h-15 rounded-full mb-6 flex items-center justify-center"
        style={{ backgroundColor: feature.icon_backgroundcolor }}
      >
        {feature.icon}
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

export default AboutUsCard;
