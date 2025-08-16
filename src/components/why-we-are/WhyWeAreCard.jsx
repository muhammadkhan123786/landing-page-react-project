import stats from '../../assets/stats.webp';
import Card from '../UI/Card';
import Container from '../UI/Container';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion';

const WhyWeAreCard = () => {
  const cardData = {
    heading: 'Why We Are',
    headingColor: 'text-orange-500',
    heading1: 'We bring it all together —',
    heading2: 'leads, sales training, conversions, and growth tools.',
    para: '👉 To simplify growth, accelerate results, and empower businesses of all sizes to thrive in a competitive market.',
    btnTitle: 'Explore scheduling features',
  };
  return (
    <Container>
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2"
      >
        <img src={stats} alt="stats" className="w-full h-auto" />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2"
      >
        <Card cardData={cardData} />
      </motion.div>
    </Container>
  );
};

export default WhyWeAreCard;
