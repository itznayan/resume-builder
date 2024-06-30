import { Notebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const ResumeItemCard = ({ resume }) => {
  return (
    <Link to={"/dashboard/resume/" + resume.id + "/edit"}>
      <Tilt options={{ max: 55, scale: 0.95, speed: 450 }}>
        <div className="mt-10">
          <div className="flex items-center rounded-2xl justify-center p-14 bg-slate-200 h-[280px] ">
            <Notebook />
          </div>
          <h2 className="px-4 text-center">{resume.attributes.title}</h2>
        </div>
      </Tilt>
    </Link>
  );
};

export default ResumeItemCard;
