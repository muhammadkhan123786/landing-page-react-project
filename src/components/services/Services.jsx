import Card from '../UI/Card';
import Container from '../UI/Container';
import monitorcard from '../../assets/monitor-card.webp';
import Section from '../UI/Section';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion';

const Services = () => {
  const cardData = {
    heading: 'OUR SERVICES',
    headingColor: 'text-green-600',
    heading1: 'Introducing best',
    heading2: 'All-in-One Growth Solutions',
    para: `At <strong>Ubizbay(Universal Business Bay)</strong>, we provide everything your business needs to grow under one roof.
    <br/><br/>
    <ul className="list-none">
        <li>
         <strong>🎯 Lead Generation</strong>
         <p>Attract high-quality prospects and build a strong customer pipeline.</p>
        </li>
        <li>
         <strong>📈 Sales Team Training</strong>
         <p>Empower your salespeople with modern techniques to close more deals.</p>
        </li>
        <li>
         <strong>💡 Conversion Optimization</strong>
         <p>Turn visitors into loyal customers through smarter strategies and tools.</p>
        </li>
        <li>
         <strong>📊 Business Growth Strategy</strong>
         <p>Tailored plans to help your business scale efficiently, whether you’re a startup or enterprise.</p>
        </li>
        
     </ul>
    `,
    btnTitle: 'Learn more about monitoring',
  };
  return (
    <Section>
      <Container>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2"
        >
          <Card cardData={cardData} />
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2"
        >
          <img src={monitorcard} alt="stats" />
        </motion.div>
      </Container>
    </Section>
  );
};

export default Services;
