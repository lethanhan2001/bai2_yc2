import Image from "../../images/animationheader.png";
import useSize from "../../hooks/useSize";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import ImageNavbar from "../../images/slidebg.jpg";
const Navbar = () => {
  const width: number = useSize();
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div
        className="w-full h-[851.4px] bg-cover"
        style={{ backgroundImage: `url(${ImageNavbar})` }}
      >
        <div
          className={
            width <= 1250
              ? `flex justify-between items-center relative py-10 px-[5%] active`
              : `flex justify-between items-center relative py-10 px-[10%]`
          }
        >
          <div className="flex items-center relative">
            <div className="mainlogo">
              <div className="w-16 h-16 rounded-full bg-[#ff64ae]"></div>
              <div className="w-[13px] absolute top-[14px] left-[10px] h-[13px] rounded-full bg-white"></div>
              <div className="w-[6px] h-[6px] top-[29px] absolute left-[22px] rounded-full bg-white"></div>
              <div className="w-10 h-[11px] absolute top-[28px] left-10 bg-[#091156] rounded-full"></div>
            </div>
            <p className="ml-[30px] text-2xl font-bold text-[#091156]">
              Beautice
            </p>
          </div>

          {width > 1250 ? (
            <nav>
              <ul className="flex items-center">
                <li className="list-none my-0 mx-[30px] first:font-semibold first:text-[#414880]">
                  Home+
                </li>
                <li className="list-none my-0 mx-[30px] font-medium text-[#8B8B8B]">
                  About
                </li>
                <li className="list-none my-0 mx-[30px] font-medium text-[#8B8B8B]">
                  Service
                </li>
                <li className="list-none my-0 mx-[30px] font-medium text-[#8B8B8B]">
                  Gallery
                </li>
                <li className="list-none my-0 mx-[30px] font-medium text-[#8B8B8B]">
                  Blog
                </li>
                <li className="list-none my-0 mx-[30px] font-medium text-[#8B8B8B]">
                  <button>Contact</button>
                </li>
              </ul>
            </nav>
          ) : (
            <div
              onClick={() => setShow(!show)}
              className="text-2xl cursor-pointer"
            >
              <FaBars />
            </div>
          )}

          {width <= 1250 && (
            <div
              className={
                show
                  ? `block fixed top-0 left-0 bottom-0 h-full w-[300px] text-center bg-white transition-all`
                  : `block fixed top-0 left-[-300px] bottom-0 h-full w-[300px] text-center bg-white transition-all active`
              }
            >
              <div className="flex justify-center items-center mt-[100px]">
                <ul>
                  <li className="list-none my-8 ">Home+</li>
                  <li className="list-none my-8 ">About</li>
                  <li className="list-none my-8 ">Service</li>
                  <li className="list-none my-8 ">Gallery</li>
                  <li className="list-none my-8 ">Blog</li>
                  <li className="list-none my-8 ">
                    <button>Contact</button>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div
          className={
            width <= 1250 && width > 651
              ? `my-8 mx-[6%] flex justify-evenly items-center `
              : width < 650
              ? `flex flex-col items-center mx-auto my-[30px]`
              : `flex justify-evenly items-center my-8 mx-[12%]`
          }
        >
          <div className={width <= 650 ? "w-full px-8" : "w-1/2"}>
            <h1 className="text-5xl font-bold text-[#091156]">
              Clinic & beauty consultant
            </h1>
            <p className="text-base font-medium text-[#091156] mt-6">
              It is a long established fact that a reader will be <br />
              by the readable content of a page.
            </p>
            <button className="mt-6">More Details</button>
          </div>

          <div className={width <= 650 ? "w-full px-8 mt-8" : "w-1/2"}>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
