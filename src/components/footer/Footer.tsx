import Chrev from "../../images/chrev.png";
import TotopBtn from "../../images/ToTop Button.png";
import Facebook from "../../images/facebook-f.png";
import Likedin from "../../images/linkedin-in.png";
import Twitter from "../../images/twitterlogo.png";
import Instagram from "../../images/instagramlogo.png";
import Youtube from "../../images/youtube.png";
import useSize from "../../hooks/useSize";
import Footer1 from "../../images/footer1.png";
import Footer2 from "../../images/footer2.png";
import Footer3 from "../../images/footerbottm.png";

const Footer = () => {
  const width: number = useSize();
  return (
    <>
      {width <= 800 ? (
        <footer className="mt-[100px]">
          <div
            className={"w-full h-[800px]"}
            style={{
              backgroundImage: `url(${Footer1})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className={"w-full h-[800px] relative"}
              style={{
                backgroundImage: `url(${Footer1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative">
                <div
                  className={
                    width < 800
                      ? "flex items-center flex-col"
                      : "flex justify-between items-center pt-[200px] mx-[10px] my-0 "
                  }
                >
                  <div className="w-full pt-[120px] flex justify-center flex-col items-center pb-8">
                    <div className="flex items-center relative">
                      <div className="mainlogo">
                        <div className="w-[63px] h-[63px] rounded-full bg-[#ff64ae]"></div>
                        <div className="w-[13px] h-[13px] absolute top-[14px] left-[10px] rounded-full bg-white"></div>
                        <div className="w-[6px] h-[6px] top-[29px] absolute rounded-full left-[22px] bg-white"></div>
                        <div className="h-[11px] w-[40px] top-[27px] left-10 absolute rounded-[50px] bg-white"></div>
                      </div>
                      <p className="ml-[30px] text-2xl font-bold text-white">
                        Beautice
                      </p>
                    </div>
                    <div className="w-1/2 mt-4">
                      <p className="text-[#d7dbff]">
                        <span className="font-bold text-[#d7dbff]">
                          Beautice
                        </span>{" "}
                        is a Beauty Clinic WordPress Theme.
                      </p>
                      <p className="text-[#d7dbff]">
                        Baker Steet 101, NY, United States
                      </p>
                      .
                      <div className="flex items-center text-[#d7dbff]">
                        <p className="phone">+521 569 8966.</p>
                        <p className="ml-4">mail@company.com.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[55%]">
                    <div className="flex justify-between">
                      <div className="nav1">
                        <p className="text-white text-lg font-semibold">
                          Pages
                        </p>
                        <div className="box">
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Home
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              About
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Services
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Gallery
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Team
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-12">
                        <p className="text-white text-lg font-semibold">
                          Informations
                        </p>
                        <div className="box">
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Terms & conditions
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Privacy policy
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Blog
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Contact
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={"mt-[10px] mx-[10%]"}>
                  <div className="flex justify-between flex-1 flex-wrap items-center">
                    <div className="grid grid-cols-5">
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Facebook}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Twitter}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Likedin}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Youtube}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Instagram}
                        alt=""
                      />
                    </div>
                    <div className="end_title">
                      <p className="text-sm font-normal mt-6 text-[#d7dbff]">
                        © AltDesain Studio 2021 - All right reserved.
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-[10%] right-[3%]">
                    <img src={TotopBtn} alt="" />
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-0 z-[-1] w-full h-[300px]"
                style={{
                  backgroundImage: `url(${Footer3})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="mt-[100px]">
          <div
            className={"w-full h-[800px]"}
            style={{
              backgroundImage: `url(${Footer1})`,
              backgroundSize: "cover",
            }}
          >
            <div
              className={"w-full h-[800px] relative"}
              style={{
                backgroundImage: `url(${Footer1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="relative">
                <div
                  className={
                    width < 650
                      ? "flex justify-start flex-col"
                      : "flex justify-between items-center pt-[200px] mx-[10%] my-0 "
                  }
                >
                  <div className="w-full">
                    <div className="flex items-center relative">
                      <div className="mainlogo">
                        <div className="w-[63px] h-[63px] rounded-full bg-[#ff64ae]"></div>
                        <div className="w-[13px] h-[13px] absolute top-[14px] left-[10px] rounded-full bg-white"></div>
                        <div className="w-[6px] h-[6px] top-[29px] absolute rounded-full left-[22px] bg-white"></div>
                        <div className="h-[11px] w-[40px] top-[27px] left-10 absolute rounded-[50px] bg-white"></div>
                      </div>
                      <p className="ml-[30px] text-2xl font-bold text-white">
                        Beautice
                      </p>
                    </div>
                    <div className="w-1/2 mt-4">
                      <p className="text-[#d7dbff]">
                        <span className="font-bold text-[#d7dbff]">
                          Beautice
                        </span>{" "}
                        is a Beauty Clinic WordPress Theme.
                      </p>
                      <p className="text-[#d7dbff]">
                        Baker Steet 101, NY, United States
                      </p>
                      .
                      <div className="flex items-center text-[#d7dbff]">
                        <p className="phone">+521 569 8966.</p>
                        <p className="ml-4">mail@company.com.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[45%]">
                    <div className="flex justify-between">
                      <div className="nav1">
                        <p className="text-white text-lg font-semibold">
                          Pages
                        </p>
                        <div className="box">
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Home
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              About
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Services
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Gallery
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Team
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="nav2">
                        <p className="text-white text-lg font-semibold">
                          Informations
                        </p>
                        <div className="box">
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Terms & conditions
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Privacy policy
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Blog
                            </p>
                          </div>
                          <div className="flex items-center my-5 mx-0">
                            <img src={Chrev} alt="" />
                            <p className="text-base font-normal text-[#d7dbff] ml-[10px]">
                              Contact
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={"mt-[100px] mx-[10%]"}>
                  <div className="flex justify-between items-center">
                    <div className="grid grid-cols-5">
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Facebook}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Twitter}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Likedin}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Youtube}
                        alt=""
                      />
                      <img
                        className="w-[25px] h-[27.84px] mr-[70px]"
                        src={Instagram}
                        alt=""
                      />
                    </div>
                    <div className="end_title">
                      <p className="text-sm font-normal text-[#d7dbff]">
                        © AltDesain Studio 2021 - All right reserved.
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-[10%] right-[3%]">
                    <img src={TotopBtn} alt="" />
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-0 z-[-1] w-full h-[300px]"
                style={{
                  backgroundImage: `url(${Footer3})`,
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
