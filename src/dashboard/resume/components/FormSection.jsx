import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import { Button } from "../../../components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [activeIndexFormIndex, setActiveIndexFormIndex] = useState(1);

  const [isNext, setIsNext] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center">
        <Button className="bg-gray-100" variant="outline">
          <LayoutGrid />
          Theme
        </Button>
        <div className="flex gap-1">
          {activeIndexFormIndex > 1 && (
            <Button
              onClick={() => setActiveIndexFormIndex(activeIndexFormIndex - 1)}
              size="sm"
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            disabled={!isNext}
            onClick={() => setActiveIndexFormIndex(activeIndexFormIndex + 1)}
            className="flex gap-2"
            size="sm"
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Personal Detail  */}
      {activeIndexFormIndex == 1 ? (
        <PersonalDetail isNext={(v) => setIsNext(v)} />
      ) : null}

      {/* Summery */}

      {/* Experience */}

      {/* educational Detail */}

      {/* Skills */}
    </div>
  );
};

export default FormSection;
