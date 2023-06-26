import PlayBtn from "../../images/Play_button.png";
import HomeBg from "../../images/home.png";
import useSize from "../../hooks/useSize";
const About = () => {
  const width: number = useSize();
  return (
    <>
      <div
        className={
          width <= 700
            ? `flex justify-center items-center flex-col`
            : `flex justify-around items-center flex-nowrap ml-[5%] mt-20`
        }
      >
        <div
          className={width <= 700 ? "w-full mt-[60px] px-6" : "w-2/5 mt-[60x]"}
        >
          <h6>About Us</h6>
          <h1>We are the best beauty clinic</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat. Id dui erat sed quam tellus in purus.
            Pellentesque congue fringilla cras tellus enim.
          </p>

          <div className="flex items-center mt-[20px]">
            <button>Learn More</button>
            <div className="flex items-center ml-10">
              <img src={PlayBtn} alt="" />
              <p className="text-base font-semibold text-[#8b8b8b] ml-[20px]">
                Watch Video
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            width <= 700
              ? "w-full"
              : "w-[476px] h-[350px] rounded-[50px] mt-[100px]"
          }
        >
          <img className="w-full h-full rounded-[50x]" src={HomeBg} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
