import React from 'react';
import hero from '../assets/hero.png';
import HeroCard from './HeroCard';

const Hero = () => {
  return (
    <main className="w-[100vw] h-[500px] relative">
      <img
        src={hero}
        className="w-full h-full object-cover object-center"
        alt=""
      />
      <div className="py-[14px] bg-[#292828]">
        <h1 className="hero-text text-center">
          John Bill / Creator / Moved to NYC / 27.11.22 / Live now/John Bill /
          Creator / Moved to NYC / 27.11.22 / Live now / John Bill / Creator /
          Moved to NYC / 27.11.22 / Live now
        </h1>
      </div>
      <div className="absolute top-[400px] left-[122px]">
        <HeroCard />
      </div>
    </main>
  );
};

export default Hero;
