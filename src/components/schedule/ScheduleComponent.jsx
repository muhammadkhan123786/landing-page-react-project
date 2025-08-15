import stats from '../../assets/stats.webp';

import Card from '../UI/Card';
import Container from '../UI/Container';
const ScheduleComponent = () => {
  const cardData = {
    heading: 'SCHEDULE',
    headingColor: 'text-orange-500',
    heading1: 'Streamline Your Business',
    heading2: 'With Smart Scheduling Solutions',
    para: 'Take control of your time and boost productivity with our intelligent scheduling system. Automate appointments, manage team availability, and deliver exceptional customer experiences through seamless calendar management.',
    btnTitle: 'Explore scheduling features',
  };
  return (
    <Container>
      <div className="w-full md:w-1/2">
        <img src={stats} alt="stats" className="w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2">
        <Card cardData={cardData} />
      </div>
    </Container>
  );
};

export default ScheduleComponent;
