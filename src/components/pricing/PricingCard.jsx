const PricingCard = ({ packageType, Price }) => {
  return (
    <>
      <div className={`md:w-1/2 w-full bg-white shadow-md rounded-2xl`}>
        <p className={`p-4 text-gray-400 font-bold`}>{packageType}</p>
        <h1 className="px-4 pb-16 text-3xl font-bold">${Price}/mo</h1>
      </div>
    </>
  );
};

export default PricingCard;
