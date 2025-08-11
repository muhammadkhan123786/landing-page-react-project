import Section from '../UI/Section';
import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

const Services = () => {
  return (
    <Section>
      <div className={`flex flex-col md:flex md:flex-row gap-32`}>
        <LeftSection />
        <RightSection />
      </div>
    </Section>
  );
};

export default Services;
