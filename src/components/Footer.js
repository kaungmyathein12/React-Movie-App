import React from "react";
import { AiFillGithub } from "react-icons/ai";
function Footer() {
  return (
    <div className="bg-[#0d0d0d] h-60 px-5 md:px-20 flex flex-col lg:flex-row justify-center lg:justify-between items-center relative z-20">
      <div className="text-white mb-5 lg:mb-0 text-center lg:text-left">
        <h3 className="text-2xl font-bold mb-3 lg:mb-5">React Movie App</h3>
        <p className="text-gray-400">CopyRight 2022. All rights reserved.</p>
      </div>
      <div className="text-white mb-5 lg:mb-0 text-center flex flex-col items-center lg:items-start lg:text-left">
        <h4 className="text-lg font-medium mb-3">
          kaungmyathein.dev@gmail.com
        </h4>
        <a
          href="https://github.com/kaungmyathein982"
          target="_black"
          rel=""
          className="text-2xl"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default Footer;
