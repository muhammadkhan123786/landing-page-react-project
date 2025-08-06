import Card from '../UI/Card';
import Container from '../UI/Container';
import monitorcard from '../../assets/monitor-card.webp';
import Section from '../UI/Section';

const About = () => {
  const cardData = {
    heading: 'MONITOR',
    headingColor: 'text-green-600',
    heading1: 'Introducing best',
    heading2: 'mobile carousels',
    para: 'Before the ship is really back. Round, round, all around the world. Round, all round the world. Round, all around the world, all around the world. ',
    btnTitle: 'Learn more about monitoring',
  };
  return (
    <Section>
      <Container>
        <div className={`w-full md:w-1/2`}>
          <Card cardData={cardData} />
        </div>
        <div className={`w-full md:w-1/2`}>
          <img src={monitorcard} alt="stats" />
        </div>
      </Container>
    </Section>
  );
};

export default About;
