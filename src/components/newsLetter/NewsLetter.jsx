import { FaArrowRight } from 'react-icons/fa6';
import Section from '../UI/Section.jsx';

const NewsLetter = () => {
  return (
    <Section>
      <div className="bg-blue-600 rounded-2xl overflow-hidden">
        <div className="relative md:px-16 py-16 px-6 md:py-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>
          <div
            className="relative flex flex-col md:flex-row
           justify-between items-center gap-8 lg:gap-12
          "
          >
            {/*left div */}
            <div className="text-white">
              <h1 className="text-3xl mb-4 font-bold">Subscribe newsletter</h1>

              <p>
                Best cooks and best delivery guys all at your service. Hot tasty
                food.{' '}
              </p>
            </div>

            {/*right div */}
            <div>
              <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full md:w-70 px-4 py-3 rounded-xl focus:outline-none md:rounded-r-none bg-white"
                />

                <button className="bg-green-500 sm:px-4 md:px-12 py-4 flex items-center justify-center gap-2 text-white md:rounded-r-2xl cursor-pointer rounded">
                  Discover <FaArrowRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default NewsLetter;
