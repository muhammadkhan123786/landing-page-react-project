import { useState } from 'react';
import { navBarLinks } from '../../db/navBarLinks';
import NavLinkItem from './NavLinkItem';
const NavbarListItems = () => {
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <div className="hidden md:flex items-center gap-10">
      {navBarLinks?.map((navbar) => (
        <NavLinkItem
          key={navbar.id}
          href={navbar.href}
          label={navbar.label}
          activeLink={activeLink}
          setActiveLink={() => setActiveLink(navbar.href)}
        />
      ))}
    </div>
  );
};

export default NavbarListItems;
