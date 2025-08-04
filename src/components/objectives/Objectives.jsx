import { features } from '../../assets/data';
import { objectives as css } from './objective.js';
import Objective from './Objective.jsx';

const Objectives = () => {
  return (
    <section className={css.section}>
      <div className={css.main}>
        <div className={css.grid}>
          <div>
            {/* heading  */}
            <p className={css.grid_p}>ACHIEVE MORE</p>
            <h2 className={css.grid_heading}>
              Purpose of a convoy is to keep your team
            </h2>
          </div>
          <div className={css.grid_bullet_points}>
            {/*bullet points */}
            {features.map((feature) => (
              <div className={css.feature_flex}>
                <Objective key={feature.id} feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;
