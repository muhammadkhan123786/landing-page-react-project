import { other_features } from '../../assets/data';
import FeatureCard from './FeatureCard';
import FeatureHead from './FeatureHead';
import { header } from '../navbar/navbarStyles';

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <FeatureHead />
      {/*list of features. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {other_features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
      <div className="justify-center items-center flex mt-16">
        <button className={header.button}> Become a partner </button>
      </div>
    </section>
  );
};

export default Features;
