import { digitalservices } from '../../../assets/data';
import GridCard from './GridCard';

const RightSection = () => {
  return (
    <>
      <div className="w-full md:w-2/3">
        <div className="grid grid-col-1 md:grid-cols-2 gap-8">
          {digitalservices.map((service) => (
            <GridCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSection;
