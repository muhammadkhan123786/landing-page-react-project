import { useState } from 'react';
import MobileSection from './MobileSection';
import { navBarLinks } from '../../db/navBarLinks';
import { HiMenu, HiX } from 'react-icons/hi';
import NavLinkItem from './NavLinkItem';
import Logo from './Logo.jsx';

const MobileViewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const mobileMenuHandler = () => {
    setIsOpen((pre) => {
      return !pre;
    });
  };
  return (
    <>
      <div className={`md:hidden px-2 py-2 flex justify-between`}>
        <Logo />
        <button className={`md:hidden`} onClick={mobileMenuHandler}>
          {isOpen ? (
            <HiX className={`size-6`} />
          ) : (
            <HiMenu className={`size-6`} />
          )}
        </button>
      </div>
      {isOpen && (
        <MobileSection>
          {navBarLinks?.map((navbar) => (
            <NavLinkItem
              key={navbar.id}
              href={navbar.href}
              label={navbar.label}
              activeLink={activeLink}
              setActiveLink={() => setActiveLink(navbar.href)}
              isMobileView={true}
              closeMobileMenuBar={mobileMenuHandler}
            />
          ))}

          <button
            className={`bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 cursor-pointer text-sm font-medium shadow-lg hover:shadow-blue-300 mb-2`}
          >
            Get in touch
          </button>
        </MobileSection>
      )}
    </>
  );
};

export default MobileViewNavbar;
