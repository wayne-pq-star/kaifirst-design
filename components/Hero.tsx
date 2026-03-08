import React from 'react';
import FeaturedCarousel from './FeaturedCarousel';
import { HERO_IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black pt-24 pb-5">
      
      {/* Featured Carousel Area */}
      <div className="w-full max-w-7xl px-6 md:px-12 flex items-center justify-center">
         <FeaturedCarousel images={HERO_IMAGES} />
      </div>

    </section>
  );
};

export default Hero;