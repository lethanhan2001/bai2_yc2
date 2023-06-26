import { servicesData } from "../../data/services";
import { Services } from "../../types";
import ServiceItem from "./ServiceItem";
import useSize from "../../hooks/useSize";
const Services = () => {
  const width: number = useSize();

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[14.82px] h-[3.09px] bg-[#eeeeee] rounded-[50px]"></div>
        <div className="w-[25.31px] h-[8.15px] rounded-[50px] my-0 mx-[10px] bg-[#414880]"></div>
        <div className="w-[14.82px] h-[3.09px] bg-[#eeeeee] rounded-[50px]"></div>
      </div>

      <div className="text-center mt-[100px]">
        <h6>Main Services</h6>
        <h1>Learn services to focus on your beauty</h1>
        <p className="text-[#8B8B8B]">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient <br />
          amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
        </p>

        <div
          className={
            width < 1250
              ? `flex justify-evenly items-center mt-[50px] flex-1 flex-wrap gap-y-12 active`
              : `flex justify-evenly items-center mt-[50px] flex-1 flex-wrap gap-y-12`
          }
        >
          {servicesData.map((item: Services) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
