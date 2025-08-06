const FeatureCard = ({ feature }) => {
  return (
    <div className={`flex flex-col justify-center items-center`}>
      <div
        className={`w-24 h-24 rounded-full mb-6 flex items-center justify-center`}
        style={{ backgroundColor: feature.icon_backgroundcolor }}
      >
        {feature.icon}
      </div>
      <div className={`text-center`}>
        <h3 className={`text-2xl font-medium mb-3`}>{feature.title}</h3>
        <p className={`text-gray-600`}>{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
