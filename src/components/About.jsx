import React from 'react';
import card from '../assets/card.png';
import CardPart from './CardPart';

const About = () => {
  return (
    <main className="mt-[20rem] px-[96px] pb-[244px] border-black border-b">
      <div className=" flex items-center justify-around">
        <div>
          <h1 className="main-heading text-[28px] ">Releases</h1>
          <p className="main-heading italic opacity-75">
            Videos that you upload in collaboration with aBit appear here.
          </p>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li className="border-l-2 pl-4">
              <h1>1</h1>
              <p className="opacity-75 text-14px">Shared </p>
              <p className="opacity-75 text-14px">Videos</p>
            </li>
            <li className="border-l-2 pl-4">
              <h1>$9510</h1>
              <p className="opacity-75 text-14px">Funds </p>
              <p className="opacity-75 text-14px">Raised</p>
            </li>
            <li className="border-l-2 pl-4">
              <h1>317</h1>
              <p className="opacity-75 text-14px">Co-owner </p>
              <p className="opacity-75 text-14px">Community</p>
            </li>
            <li className="border-l-2 pl-4">
              <h1>$3804</h1>
              <p className="opacity-75 text-14px">Co-owner </p>
              <p className="opacity-75 text-14px">Earnings</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center mt-10 ml-[12rem] gap-[3rem]">
        <div className="w-[283.64px] h-[312px] bg-[#EDEDED] rounded-xl my-5 text-[#959595] flex flex-col items-center justify-center relative">
          <p className="text-[32px]">+</p>
          <p className="text-center w-[250px] absolute top-[256px]">
            You haven’t uploaded any videos with aBit yet. Add now!
          </p>
        </div>
        <div className="w-[283.64px] h-[312px] bg-[#EDEDED] rounded-xl my-5 text-[#959595] flex flex-col items-center justify-center relative">
          <img
            src={card}
            className="object-cover w-full h-full rounded-xl"
            alt=""
          />
          <h1 className="absolute top-2 left-3 z-30 text-white text-xl">
            The Sound of Silence
          </h1>
          <div className="absolute text-white bottom-2">
            <CardPart />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
