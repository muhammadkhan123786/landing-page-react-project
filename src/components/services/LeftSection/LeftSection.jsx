import Button from '../../UI/Button';
import GoalListing from './GoalListing';
import Heading from './Heading';

const LeftSection = () => {
  return (
    <>
      <div
        className="w-full md:w-1/3
            "
      >
        <Heading />
        <GoalListing />
        <div className="pt-8">
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
