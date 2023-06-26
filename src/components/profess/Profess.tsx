import { professData } from "../../data/profess";
import { Profess } from "../../types";
import ProfessItem from "./ProfessItem";
const Profess: React.FC = () => {
  return (
    <>
      <div className="text-center mt-[100px]">
        <h6>Professional Teams</h6>
        <h1>The Professional expert</h1>
        <p className="text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div className="flex justify-evenly items-center mt-[50px] flex-1 flex-wrap gap-y-[50px]">
          {professData.map((item: Profess) => (
            <ProfessItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profess;
