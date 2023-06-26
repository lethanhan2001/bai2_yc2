import { Services } from "../../types";

interface ServicesItem {
  item: Services;
}

const ServiceItem: React.FC<ServicesItem> = ({ item }) => {
  return (
    <>
      <div className="w-[343px] h-[408px] bg-white rounded-[42px] px-0 py-[20px] shadow-xl">
        <div className="image">
          <img className="mx-auto mt-10" src={item.image} alt="" />
        </div>
        <h3 className="text-lg font-semibold text-[#091156] mt-[50px]">
          {item.name}
        </h3>
        <span className="text-sm font-normal text-[#8b8b8b] px-6 flex justify-center items-center mt-5">
          {item.title}
        </span>
      </div>
    </>
  );
};

export default ServiceItem;
