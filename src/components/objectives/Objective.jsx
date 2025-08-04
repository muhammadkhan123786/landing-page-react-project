import { objective_card as css } from './objectiveCard';
const Objective = ({ feature }) => {
  return (
    <>
      <div className={css.icon}>{feature.icon}</div>
      <div>
        <h3 className={css.title}>{feature.title}</h3>
        <p className={css.description}>{feature.description}</p>
      </div>
    </>
  );
};

export default Objective;
