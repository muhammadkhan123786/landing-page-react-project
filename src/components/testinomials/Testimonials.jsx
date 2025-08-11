import { testimonials } from '../../assets/data';
import FeatureHead from '../UI/FeatureHead';
import Section from '../UI/Section';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <Section>
      <FeatureHead
        heading={'What our happy client say'}
        message={'Things that make it the best place to start trading'}
      />
      <div className={`flex flex-col md:flex-row gap-4 text-center p-4`}>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
