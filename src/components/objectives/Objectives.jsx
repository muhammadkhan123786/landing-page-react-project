import { features } from '../../assets/data';
import Objective from './Objective.jsx';
import Section from '../UI/Section.jsx';

const Objectives = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <div>
          {/* heading  */}
          <p className="text-sm text-purple-600 font-medium mb-2">
            ACHIEVE MORE
          </p>
          <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
            Purpose of a convoy is to keep your team
          </h2>
        </div>
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-x-8">
          {/*bullet points */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start space-x-4 gap-4 pb-4"
            >
              <Objective feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Objectives;
