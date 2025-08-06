import { other_features } from '../../assets/data';
import FeatureCard from './FeatureCard';
import FeatureHead from './FeatureHead';

import Section from '../UI/Section';
import Button from '../UI/Button';

const Features = () => {
  return (
    <Section>
      <FeatureHead />
      {/*list of features. */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
        {other_features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className={`justify-center items-center flex mt-16`}>
        <Button>Become a partner</Button>
      </div>
    </Section>
  );
};

export default Features;
