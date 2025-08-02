import { partner } from './partner';
import slack from '../../assets/slack.png';
import amazon from '../../assets/amazon.png';
import woocommerce from '../../assets/woocommerce.png';
import meundies from '../../assets/meundies.png';
import sitepoint from '../../assets/sitepoint.png';

const Partners = () => {
  const logos = [
    { id: 1, logo: slack, title: 'slack' },
    { id: 2, logo: amazon, title: 'amazon' },
    { id: 3, logo: woocommerce, title: 'woocommerce' },
    { id: 4, logo: meundies, title: 'meundies' },
    { id: 5, logo: sitepoint, title: 'sitepoint' },
  ];
  return (
    <main className={partner.main}>
      <section className={partner.text_section}>
        Proud partner at <br />
        Hubspot & Segment.
      </section>
      <section className={partner.logo_section.section + ' animate_marquee'}>
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={logo.title}
            className={partner.logo_section.img}
          />
        ))}
      </section>
    </main>
  );
};

export default Partners;
