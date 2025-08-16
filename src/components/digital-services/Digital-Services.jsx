import { motion } from 'framer-motion';
import Section from '../UI/Section';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';
import { fadeIn } from '../../assets/motion';

const DigitalServices = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
    >
      <Section>
        <div className="flex flex-col md:flex md:flex-row gap-32">
          <LeftSection />
          <RightSection />
        </div>
      </Section>
    </motion.div>
  );
};

export default DigitalServices;
