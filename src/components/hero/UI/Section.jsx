const Section = ({ children, position = 'left' }) => {
  return (
    <section
      className={`w-full md:w-1/2  ${
        position === 'right' ? 'mt-16 md:mt-0 pl-0 md:pl-12' : 'space-y-4'
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
