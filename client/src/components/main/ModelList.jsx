import Model from "./Model";

import imageAmg from "../../assets/main_model_amg.png";
import imgS from "../../assets/main_model_s.png";
import imageCla from "../../assets/main_model_cla.png";
import imageC from "../../assets/main_model_c.png";

function ModelList() {
  return (
    <div className="w-5/6 mx-auto py-20">
      <div className="flex relative">
        <Model image={imageAmg} name="AMG" />
        <Model image={imgS} name="S-Class" />
      </div>
      <div className="flex relative">
        <Model image={imageCla} name="CLA-Class" />
        <Model image={imageC} name="C-Class" />
      </div>
    </div>
  );
}

export default ModelList;
