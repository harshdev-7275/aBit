import React from 'react';

const Footer = () => {
  return (
    <div className="px-[125px] py-[130px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-3 ml-[10rem]">
          <h1 className="text-6xl font-bold">aBit</h1>
          <p className="text-lg font-light w-[250px]">
            Changing the way in which creators and fans interact.
          </p>
        </div>
        <ul className="border-l border-black pl-[20px]">
          <li>Home</li>
          <li>Are you a Creator?</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
