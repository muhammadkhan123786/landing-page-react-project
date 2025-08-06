import { FaArrowRightLong } from 'react-icons/fa6';
const Card = ({ cardData }) => {
  return (
    <>
      <p className={`font-semibold ${cardData.headingColor}`}>
        {cardData.heading}
      </p>
      <h2 className={`text-2xl md:text-4xl font-bold my-4`}>
        {cardData.heading1} <br /> {cardData.heading2}{' '}
      </h2>
      <p className={`text-gray-600`}>{cardData.para} </p>

      <a
        href="#"
        className={`flex items-center gap-2 font-semibold text-blue-600
          hover:gap-4 transition-all duration-300 mt-8`}
      >
        {cardData.btnTitle} <FaArrowRightLong className={`w-5 h-5`} />
      </a>
    </>
  );
};

export default Card;
