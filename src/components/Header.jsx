import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  return (
    <nav className="max-w-[1400px] mx-auto py-[10px]">
      <div className="flex items-center justify-between">
        <h1 className="text-[#292D32] font-[inter] text-[46px] ml-[80px]">
          aBit
        </h1>

        <div className="flex items-center justify-center gap-[20px] sm:pr-[50px]">
          <button className=" sm:hidden md:hidden lg:block px-[22px] py-[12.5px] text-[12px] text-[#764CC2] border-2 border-[#764CC2] rounded-full">
            Share new video
          </button>
          <div>
            <FaWallet
              size={28}
              className="text-[#777777] sm:hidden md:hidden lg:block"
            />
          </div>
          <div>
            <FaBell
              size={28}
              className="text-[#777777] sm:hidden md:hidden lg:block"
            />
          </div>
          <div>
            <img src="../assets/dp.jpeg" alt="" />
          </div>
          <div>
            <IoIosArrowDown size={28} className="text-[#777777]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
