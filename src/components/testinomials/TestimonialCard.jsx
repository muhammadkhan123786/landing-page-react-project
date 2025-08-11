const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={`bg-white shadow-gray-300 shadow-md p-4 justify-items-center flex flex-col gap-4`}
    >
      <img
        src={testimonial.image}
        alt={testimonial.name + ' image'}
        className={`rounded-full h-100`}
      />

      <div>stars</div>

      <h1 className={`text-xl font-bold`}>{testimonial.name}</h1>

      <p>{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;
