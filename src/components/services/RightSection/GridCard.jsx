const GridCard = ({ service }) => {
  return (
    <>
      <div className="bg-white cursor-pointer rounded-2xl hover:shadow-xl transition-all duration-300 p-6 pt-0 hover:scale-105">
        <div className="mb-4">{<service.icon />}</div>
        <h1 className="text-xl font-semibold mb-2">{service.title}</h1>
        <p className="mb-4">{service.description}</p>
        <a
          href={service.link}
          className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
        >
          READ MORE
        </a>
      </div>
    </>
  );
};

export default GridCard;
