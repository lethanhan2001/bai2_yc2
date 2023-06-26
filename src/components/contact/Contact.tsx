import ContactBg from "../../images/Contact Animations.png";
import MainBgContact from "../../images/bgbubble.png";
import useSize from "../../hooks/useSize";
const Contact = () => {
  const width: number = useSize();
  return (
    <>
      {width <= 880 ? (
        <div
          className="w-full mt-[100px]"
          style={{
            backgroundImage: `url(${MainBgContact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-center items-center flex-col">
            <div className="w-3/4 flex justify-center items-center mx-auto">
              <img src={ContactBg} alt="" />
            </div>
            <div className="w-full px-8">
              <h6>Contact Us</h6>
              <h1>Send your inquiry to our expert team</h1>
              <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
              <div className="box_input">
                <div className="flex items-center my-8 flex-wrap flex-1 gap-y-10">
                  <input
                    className="w-[242px] h-[62px] rounded-[15px] border-[#d9ddfe] border-2 outline-none pl-5"
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    className={`w-[242px] ${
                      width < 650 ? "ml-0" : "ml-8"
                    } h-[62px] rounded-[15px] border-[#d9ddfe] border-2 outline-none pl-5`}
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="flex flex-col items-center w-full mx-auto ">
                  <input
                    className="w-full h-[62px]  pl-5 rounded-[15px] border-[#d9ddfe] border-2 outline-none"
                    type="email"
                    placeholder="Email address"
                  />
                  <input
                    className="w-full h-[62px] mt-8 pl-5 rounded-[15px] border-[#d9ddfe] border-2 outline-none"
                    type="text"
                    placeholder="Subject message"
                  />
                  <textarea
                    className="rounded-[15px] border-[#d9ddfe] border-2 outline-none w-full h-[190px] p-5 mt-8"
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></textarea>
                </div>
              </div>

              <button className="mt-8">Send Message</button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-full mt-[100px]"
          style={{
            backgroundImage: `url(${MainBgContact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex justify-between items-center mr-[10%]">
            <div className="w-1/2">
              <img src={ContactBg} alt="" />
            </div>
            <div className="w-1/2">
              <h6>Contact Us</h6>
              <h1>Send your inquiry to our expert team</h1>
              <p className="text-[#8B8B8B]">
                Lorem ipsum dolor sit amet nulla turapis tellus.
              </p>
              <div className="mt-10">
                <div className="flex items-center flex-row">
                  <input
                    className="w-[242px] h-[62px] rounded-[15px] border-[#d9ddfe] border-2 outline-none pl-5"
                    type="text"
                    placeholder="First name"
                  />
                  <input
                    className="w-[242px] ml-[30px] h-[62px] rounded-[15px] border-[#d9ddfe] border-2 outline-none pl-5"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="item_input">
                  <input
                    className=" w-full h-[62px] rounded-[15px] border-2 border-[#D9DDFE] outline-none my-[15px] mx-auto pl-5"
                    type="email"
                    placeholder="Email address"
                  />
                  <input
                    className=" w-full h-[62px] rounded-[15px] border-2 border-[#D9DDFE] outline-none my-[15px] mx-auto pl-5"
                    type="text"
                    placeholder="Subject message"
                  />
                  <textarea
                    className="w-full h-[190px] rounded-[15px]  border-2 border-[#D9DDFE] outline-none p-5 mt-6"
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></textarea>
                </div>
              </div>

              <button className="mt-8">Send Message</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
