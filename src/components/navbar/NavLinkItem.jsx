const NavLinkItem = ({
  href,
  label,
  activeLink,
  setActiveLink,
  isMobileView = false,
  closeMobileMenuBar,
}) => {
  const handleClickMenu = (href) => {
    setActiveLink(href);
    if (isMobileView) {
      closeMobileMenuBar(true);
    }
  };
  return (
    <a
      href={href}
      onClick={() => handleClickMenu(href)}
      className={
        href === activeLink
          ? `text-sm font-medium relative px-3 py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-600 after:transition-all duration-300 bg-red-400 text-white rounded`
          : `text-sm font-medium relative px-3 py-2 after:absolute`
      }
    >
      {label}
    </a>
  );
};

export default NavLinkItem;
