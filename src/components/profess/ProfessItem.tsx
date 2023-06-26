import { Profess } from "../../types";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
interface ProfessItems {
  item: Profess;
}
const ProfessItem: React.FC<ProfessItems> = ({ item }) => {
  return (
    <>
      <div className="w-[343px] h-[42s8px] bg-white shadow-xl rounded-[42px] px-[20px]">
        <div className="flex justify-center items-center">
          <img src={item.image} alt="" />
        </div>
        <p className="text-lg font-semibold text-[#ff64ae] mt-8">{item.name}</p>
        <h3 className="text-lg font-semibold text-[#091156]">
          {item.username}
        </h3>
        <span className="text-sm mt-8 font-normal text-[#8b8b8b]">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit ut aliquam.
        </span>
        <div className="flex justify-evenly items-center mt-8">
          <img src={Twitter} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
    </>
  );
};

export default ProfessItem;
