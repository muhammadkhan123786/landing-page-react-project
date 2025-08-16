import heroimage from '../../assets/hero-image.png';
import { fadeIn } from '../../assets/motion';
import Container from './Container';
import LeftComponent from './UI/LeftComponent';
import Section from './UI/Section';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <Container>
      <LeftComponent />

      <Section position="right">
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial="hidden"
          whileInView="show"
          className="relative"
        >
          <img
            src={heroimage}
            alt="hero section image"
            className="rounded:lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </motion.div>
      </Section>
    </Container>
  );
};

export default HeroSection;
