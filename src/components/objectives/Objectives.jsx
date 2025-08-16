import { objectives } from '../../assets/data';
import Objective from './Objective.jsx';
import Section from '../UI/Section.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion.js';

const Objectives = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div>
          {/* heading  */}

          <motion.p
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            className="text-sm text-purple-600 font-medium mb-2"
          >
            OUR OBJECTIVES
          </motion.p>
          <motion.h2
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900"
          >
            Helping Businesses Grow
          </motion.h2>
        </div>
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-x-8"
        >
          {/*bullet points */}
          {objectives.map((objective) => (
            <div
              key={objective.id}
              className="flex items-start space-x-4 gap-4 pb-4 mr-4"
            >
              <Objective feature={objective} />
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default Objectives;
