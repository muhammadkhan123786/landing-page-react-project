const Objective = ({ feature }) => {
  return (
    <>
      <div className="w-12 h-12 flex justify-start items-center">
        {feature.icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </>
  );
};

export default Objective;
