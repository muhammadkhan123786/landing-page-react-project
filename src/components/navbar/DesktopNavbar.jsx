import NavbarListItems from './NavbarListItems';

import Logo from './Logo.jsx';
import Button from '../UI/Button.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion.js';

const DesktopNavbar = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    const section = document.getElementById('newsletter');
    if (section) {
      navigate('/#newsletter');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <motion.div
      variants={fadeIn('down', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16"
    >
      <div className="hidden md:block">
        <Logo />
      </div>
      <NavbarListItems />
      <div className="hidden md:block" onClick={handleNavigate}>
        <Button>Get in touch</Button>
      </div>
    </motion.div>
  );
};

export default DesktopNavbar;
