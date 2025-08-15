import { FaStar } from 'react-icons/fa';
const StarRating = () => {
  
  return (
    <div className="flex text-yellow-500">
      {[...Array(5)].map((_, index) => (
        <FaStar key={index} className="w-6 h-6" /> // Must match size of unfilled stars
      ))}
    </div>
  );
};

export default StarRating;
