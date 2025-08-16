import { useState } from 'react';
import Section from '../UI/Section';
import PricingCard from './PricingCard';
import Button from '../UI/Button';
const Pricing = () => {
  const [productCount, setProductCount] = useState(1);
  const startPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));
  return (
    <Section>
      <h1 className="text-center text-3xl font-bold">Pricing</h1>
      <div className="w-full flex md:flex-row gap-8 mt-8 flex-col">
        <PricingCard packageType={'Starter'} Price={startPrice} />
        <PricingCard packageType={'Business'} Price={businessPrice} />
      </div>
      <div>
        <h1 className="text-center text-gray-500 p-8 font-medium">
          {productCount} products
        </h1>

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
        <h1 className="font-bold text-xl text-gray-400">
          Ready to get started?
        </h1>
        <Button>Get Started</Button>
      </div>
    </Section>
  );
};

export default Pricing;
