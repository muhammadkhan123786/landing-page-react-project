import heroimage from '../../assets/hero-image.png';
import Container from './Container';
import LeftComponent from './UI/LeftComponent';
import Section from './UI/Section';

const HeroSection = () => {
  return (
    <Container>
      <LeftComponent />

      <Section position={`right`}>
        <div className={`relative`}>
          <img
            src={heroimage}
            alt="hero section image"
            className={`rounded:lg relative z-10 hover:scale-[1.02] transition-transform duration-300`}
          />
        </div>
      </Section>
    </Container>
  );
};

export default HeroSection;
