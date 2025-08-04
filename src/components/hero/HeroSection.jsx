import { hero } from './hero';
import { header } from '../navbar/navbarStyles';
import heroimage from '../../assets/hero-image.png';
const HeroSection = () => {
  return (
    <section className={hero.section}>
      <div className={hero.left.leftParentDiv}>
        {/*left section */}
        <div className={hero.left.startdiv}>
          <span className={hero.left.star}>⭐</span>
          <span className={hero.left.text}>Jump start your growth</span>
        </div>
        <h1 className={hero.left.h1}>
          We boost the growth for
          <span className={hero.left.blue}>Startup to Fortune 500 </span>
          <span className="inline-block">
            Companies <span className="animate-pulse">⏰</span>
          </span>
        </h1>
        <p className={hero.left.p}>
          Get the most leads, sales people training and conversions, tools and
          more - all within the same one billing.{' '}
        </p>

        <div className={hero.left.email_div.main}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            className={hero.left.email_div.emailInput}
          />
          <button className={header.button}>→</button>
        </div>
      </div>
      <div className={hero.right.main}>
        {/*right section */}
        <div className="relative">
          <img
            src={heroimage}
            alt="hero section image"
            className={hero.right.img}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
