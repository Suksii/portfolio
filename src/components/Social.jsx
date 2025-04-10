import React from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Social = ({ handleOpen }) => {
  return (
    <div className="flex gap-10 justify-center py-[2rem]">
      <BiLogoInstagramAlt
        size={26}
        className="cursor-pointer hover:scale-125"
        onClick={() => handleOpen("https://www.instagram.com/suksiiii/")}
      />
      <FaFacebook
        size={26}
        className="cursor-pointer hover:scale-125"
        onClick={() => handleOpen("https://www.facebook.com/suco.ramovic/")}
      />
      <FaLinkedin
        size={26}
        className="cursor-pointer hover:scale-125"
        onClick={() =>
          handleOpen("https://www.linkedin.com/in/suco-ramovic-58a728256/")
        }
      />
      <FaGithub
        size={26}
        className="cursor-pointer hover:scale-125"
        onClick={() => handleOpen("https://github.com/Suksii")}
      />
    </div>
  );
};

export default Social;
