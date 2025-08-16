import { Goals } from '../../../db/navBarLinks';
import Goal from './Goal';
const GoalListing = () => {
  return (
    <>
      <ul>
        {Goals.map((goal) => (
          <Goal key={goal.id} goal={goal.goal} />
        ))}
      </ul>
    </>
  );
};

export default GoalListing;
