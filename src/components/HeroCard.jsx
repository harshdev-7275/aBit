import React from 'react';
import dp from '../assets/dp.jpeg';

const HeroCard = () => {
  return (
    <div className="w-[#571px] h-[#234px] bg-[#d1d1d1] flex items-center gap-4 rounded-3xl">
      <div className="h-[#234px] w-[274px]">
        <img
          src={dp}
          className="object-cover h-full w-full rounded-l-3xl"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">DAN MACE</h1>
          <p className="text-[#696969]">/Johny_Films/</p>
        </div>
        <div>
          <h1 className="font-bold text-[#696969]">Bio</h1>
          <p className="w-[300px] text-[#696969] text-[14px]">
            Simply a film fan creating original content for YouTube. Let’s
            Collaborate.
          </p>
        </div>
        <div className="w-[256px] h-[29px] border bg-[#696969] border-black px-2 rounded-lg">
          <button className="w-[128px] bg-[#d1d1d1] border border-black rounded-lg -ml-2">
            Creator
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
