import { about } from '../../assets/data';
import AboutUsCard from './AboutUsCard';
import FeatureHead from '../UI/FeatureHead';

import Section from '../UI/Section';
import Button from '../UI/Button';

const AboutUs = () => {
  return (
    <Section>
      <FeatureHead
        heading={'How can we help your business?'}
        message={
          'With data-driven strategies, expert guidance, and an all-in-one solution, we help you save time, maximize results, and focus on what matters most — running your business.'
        }
      />
      {/*list of features. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {about.map((feature) => (
          <AboutUsCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="justify-center items-center flex mt-16">
        <Button>Become a partner</Button>
      </div>
    </Section>
  );
};

export default AboutUs;
