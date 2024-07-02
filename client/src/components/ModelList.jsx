import Model from "./Model";

import AMGImage from "../assets/Model_Amg.png";
import SClassImage from "../assets/Model_Sclass.png";
import CLAClassImage from "../assets/Model_Cla.png";
import CClassImage from "../assets/Model_Cclass.png";

function ModelList() {
  return (
    <div className="w-4/5 mx-auto pb-24">
      <div className="flex relative">
        <Model image={AMGImage} name="AMG" />
        <Model image={SClassImage} name="S-Class" />
      </div>
      <div className="flex relative">
        <Model image={CLAClassImage} name="CLA-Class" />
        <Model image={CClassImage} name="C-Class" />
      </div>
    </div>
  );
}

export default ModelList;
