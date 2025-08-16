import { footerLinks } from '../../assets/data';

const FooterMenuCard = ({ keyName }) => {
  return (
    <>
      <h1 className="text-xl font-bold mb-2">{keyName}</h1>
      <div className="flex flex-col gap-2">
        {footerLinks[keyName].map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>
    </>
  );
};

export default FooterMenuCard;
