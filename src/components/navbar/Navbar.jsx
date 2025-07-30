import { NavLink } from 'react-router-dom';
import { navBarLinks } from '../../db/navBarLinks';
import { header } from './navbarStyles.js';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
const Navbar = () => {
  //for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuHandler = () => {
    setIsOpen((pre) => {
      return !pre;
    });
  };
  return (
    <nav className={header.header}>
      <div className={header.navbar}>
        <div className={header.logo}>
          <div className={header.logoDesign.blue} />
          <div className={header.logoDesign.red} />
        </div>
        <div className={header.linkDiv}>
          {navBarLinks?.map((navbar) => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `relative ${header.link} ${header.activeLink}`
                  : header.link
              }
              key={navbar.id}
              to={navbar.href}
            >
              {navbar.label}
            </NavLink>
          ))}
        </div>
        <button className={`${header.button} hidden`}>Get in touch</button>
        <button className="md:hidden" onClick={mobileMenuHandler}>
          {isOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>
      </div>

      {isOpen && (
        <div className={header.mobileMenuDiv}>
          <div className={header.mobileMenuConatiner}>
            {navBarLinks?.map((navbar) => (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `relative ${header.link} ${header.activeLink}`
                    : header.link
                }
                key={navbar.id}
                to={navbar.href}
                onClick={() => setIsOpen(false)}
              >
                {navbar.label}
              </NavLink>
            ))}
            <button className={`${header.button} w-full`}>Get in touch</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
