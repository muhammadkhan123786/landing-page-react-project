import { useState } from 'react';
import Section from '../UI/Section';
import PricingCard from './PricingCard';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import { fadeIn } from '../../assets/motion';
import { useNavigate } from 'react-router-dom';
const Pricing = () => {
  const [productCount, setProductCount] = useState(1);
  const navigate = useNavigate();
  const startPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  const handleClick = () => {
    const section = document.getElementById('newsletter');
    if (section) {
      navigate('/#newsletter');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Section>
      <motion.h1
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center text-3xl font-bold"
      >
        Pricing
      </motion.h1>
      <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView="show"
        className="w-full flex md:flex-row gap-8 mt-8 flex-col"
      >
        <PricingCard packageType={'Starter'} Price={startPrice} />
        <PricingCard packageType={'Business'} Price={businessPrice} />
      </motion.div>
      <div>
        <motion.h1
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-center text-gray-500 p-8 font-medium"
        >
          {productCount} products
        </motion.h1>

        <div className="flex gap-2 justify-center mx-auto max-w-xl">
          <span className="text-xs text-gray-600">1</span>
          <input
            className="flex-1 cursor-pointer"
            type="range"
            min="1"
            max="50"
            value={productCount}
            onChange={(e) => setProductCount(parseInt(e.target.value))}
          />
          <span className="text-xs text-gray-600">50</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-16 items-center">
        <motion.h1
          variants={fadeIn('right', 0.5)}
          initial="hidden"
          whileInView="show"
          className="font-bold text-xl text-gray-400"
        >
          Ready to get started?
        </motion.h1>
        <div onClick={handleClick}>
          <Button>Get Started</Button>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
