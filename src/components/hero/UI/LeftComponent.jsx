import { FaArrowRightLong, FaStar } from 'react-icons/fa6';
import Section from '../UI/Section';
import Button from '../../UI/Button';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../../assets/motion';
const LeftComponent = () => {
  return (
    <>
      <Section>
        {/*left section */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex gap-2 items-center bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors group"
        >
          <span className="group-hover:scale-110 transition-transform text-blue-600 group-hover:text-amber-500">
            <FaStar />
          </span>
          <span className="text-sm font-medium">Jump start your growth</span>
        </motion.div>
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col text-4xl md:text-4xl lg:text-4xl font-bold gap-1 leading-tight"
        >
          🚀 Helping Businesses Grow
          <span className="text-blue-600">Startup to Fortune 500 </span>
          <span className="inline-block">
            Companies <span className="animate-pulse">⏰</span>
          </span>
        </motion.h1>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-500 text-lg md:text-xl max-w-lg"
        >
          Get everything you need to scale faster: qualified leads, sales team
          training, higher conversions, and powerful tools — all bundled into
          one simple plan.{' '}
        </motion.p>

        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />
          <Button>
            <FaArrowRightLong className="w-5 h-5" />
          </Button>
        </motion.div>
      </Section>
    </>
  );
};

export default LeftComponent;
