const logo = 'w-4 h-4 rounded-full transition-opacity';
const Logo = () => {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <div className={logo + ' bg-blue-600 opacity-70 hover:opacity-100'}></div>
      <div
        className={logo + ' bg-red-500 -ml-2 opacity-100 hover:opacity-70'}
      ></div>
    </div>
  );
};

export default Logo;
