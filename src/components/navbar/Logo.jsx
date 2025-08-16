import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    const section = document.getElementById('home');
    if (section) {
      navigate('/#home');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={handleLogoClick}
    >
      <div>
        <div className="flex">
          <h1 className="text-blue-600 font-bold">Ubiz — </h1>
          <h1 className="pl-2 text-red-500 font-bold">Bay</h1>
        </div>
        <p className="text-amber-600 text-2xl">Universal Business Bay</p>
      </div>
    </div>
  );
};

export default Logo;
