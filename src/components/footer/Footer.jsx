import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Logo from '../navbar/Logo';
import Section from '../UI/Section';
import { CgCopyright } from 'react-icons/cg';
import { footerLinks } from '../../assets/data';
import FooterMenuCard from './FooterMenuCard';
const Footer = () => {
  const date = new Date();
  return (
    <>
      <Section>
        <div className="flex gap-8 justify-between flex-col md:flex-row">
          <div className="md:w-1/4 w-full">
            <div className="flex gap-2">
              <Logo />
            </div>
            <div className="mt-4">
              <p>
                The copy warned the Little Blind Text, that where it came from
                it would have been rewritten a thousand times.
              </p>
            </div>
            <div className="flex gap-4 py-8">
              <FaFacebook
                size="40"
                className="bg-gray-300 p-2 hover:bg-blue-600 hover:text-white rounded-full"
              />
              <FaTwitter
                size="40"
                className="bg-gray-300 p-2 hover:bg-blue-600 hover:text-white rounded-full"
              />
              <FaLinkedin
                size="40"
                className="bg-gray-300 p-2 hover:bg-blue-600 hover:text-white rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-32 ">
            {Object.keys(footerLinks).map((key) => (
              <div key={key}>
                <FooterMenuCard keyName={key} />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="flex justify-between">
          <div>
            <p>Copyright © {date.getFullYear()} onyxtech.co.uk</p>
          </div>
          <div>
            <p>Created by Muhammad Imran Khan.</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Footer;
