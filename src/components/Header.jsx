/** @format */
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import icons from "../ultils/icons";
import path from "../ultils/path";

const { RiPhoneFill, IoMail, BsHandbagFill, FaUserCircle } = icons;
const Header = () => {
  return (
    <header className="w-main h-[110px] py-[35px] flex justify-between px-5">
      <Link to={`/${path.HOME}`}>
        <img src={logo} alt="logo" className="w-[234px] object-contain" />
      </Link>
      <div className="flex text-[13px] text-title leading-4">
        <div className="px-5">
          <div className="flex  gap-[10px]">
            <RiPhoneFill color="red" />
            <span className="font-semibold">(+1800) 000 8808</span>
          </div>
          <span className="text-[12px] ">Mon-Sat 9:00AM - 8:00PM</span>
        </div>
        <div className="border-x border-solid border-[#0000001a] px-5">
          <div className="flex  gap-[10px]">
            <IoMail color="red" />
            <span className="font-semibold">SUPPORT@TADATHEMES.COM</span>
          </div>
          <span className="text-[12px]">Online Support 24/7</span>
        </div>
        <div className="flex   gap-[10px] items-center px-5">
          <BsHandbagFill color="red" size={20} />
          <span>0 item</span>
        </div>
        <div className="flex border-l border-solid gap-[10px] border-[#0000001a] px-5  items-center">
          <FaUserCircle color="red" size={25} />
          <span>profile</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
