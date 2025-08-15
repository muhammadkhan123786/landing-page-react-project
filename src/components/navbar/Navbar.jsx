import DesktopNavbar from './DesktopNavbar.jsx';
import MobileViewNavbar from './MobileViewNavbar.jsx';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm hidden md:block">
        <DesktopNavbar />
      </nav>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <MobileViewNavbar />
      </nav>
    </>
  );
};

export default Navbar;
