import StarRating from './StarRating';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-4 rounded-lg shadow-md p-4 h-auto">
      <div>
        <img
          src={testimonial.image}
          alt={testimonial.name + ' image'}
          className="rounded-full h-40 object-cover"
        />
      </div>
      <div className="pt-4">
        <StarRating />
      </div>
      <div className="h-10">
        <h1 className="text-xl font-bold">{testimonial.name}</h1>
      </div>
      <p>{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;
