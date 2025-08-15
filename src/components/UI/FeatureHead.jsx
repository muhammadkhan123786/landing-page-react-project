const FeatureHead = ({ heading, message }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-3xl font-bold mb-4">{heading}</h3>
      <p className="text-gray-600">{message} </p>
    </div>
  );
};

export default FeatureHead;
