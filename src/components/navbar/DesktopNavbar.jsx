import NavbarListItems from './NavbarListItems';

import Logo from './Logo.jsx';
import Button from '../UI/Button.jsx';

const DesktopNavbar = () => {
  return (
    <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
      <div className="hidden md:block">
        <Logo />
      </div>
      <NavbarListItems />
      <div className="hidden md:block">
        <Button>Get in touch</Button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
