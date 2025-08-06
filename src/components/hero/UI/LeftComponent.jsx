import { FaArrowRightLong } from 'react-icons/fa6';
import Section from '../UI/Section';
import Button from '../../UI/Button';
const LeftComponent = () => {
  return (
    <>
      <Section>
        {/*left section */}
        <div
          className={`flex gap-2 items-center bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors group`}
        >
          <span className={`group-hover:scale-110 transition-transform`}>
            ⭐
          </span>
          <span className={`text-sm font-medium`}>Jump start your growth</span>
        </div>
        <h1
          className={`flex flex-col text-4xl md:text-5xl lg:text-5xl font-bold gap-1 leading-tight`}
        >
          We boost the growth for
          <span className={`text-blue-600`}>Startup to Fortune 500 </span>
          <span className={`inline-block`}>
            Companies <span className={`animate-pulse`}>⏰</span>
          </span>
        </h1>
        <p className={`text-gray-500 text-lg md:text-xl max-w-lg`}>
          Get the most leads, sales people training and conversions, tools and
          more - all within the same one billing.{' '}
        </p>

        <div className={`flex gap-3 max-w-md`}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className={`flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all`}
          />
          <Button>
            <FaArrowRightLong className={`w-5 h-5`} />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default LeftComponent;
