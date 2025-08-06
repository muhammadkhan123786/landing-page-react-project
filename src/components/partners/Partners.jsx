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
    <main
      className={`w-full overflow-hidden container mx-auto py-20 flex sm:flex-row flex-col gap-4 sm:items-center items-start`}
    >
      <section
        className={`w-[300px] shrink-0 text-gray-600 border-l-4 px-4 border-l-blue-500 bg-white py-2 z-10 sm:text-base text-lg font-semibold text-left`}
      >
        Proud partner at <br />
        Hubspot & Segment.
      </section>
      <section className={`flex flex-row` + ` animate_marquee`}>
        {logos.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={logo.title}
            className={`mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
          />
        ))}
      </section>
    </main>
  );
};

export default Partners;
