import Button from '../../UI/Button';
import GoalListing from './GoalListing';
import Heading from './Heading';

const LeftSection = () => {
  const handleNavigate = () => {
    const section = document.getElementById('newsletter');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div
        className="w-full md:w-1/3
            "
      >
        <Heading />
        <GoalListing />
        <div className="pt-8" onClick={handleNavigate}>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
