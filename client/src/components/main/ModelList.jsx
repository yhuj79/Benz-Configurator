import Model from "./Model";

import imageAmg from "../../assets/main/model_amg.png";
import imgS from "../../assets/main/model_s.png";
import imageCla from "../../assets/main/model_cla.png";
import imageC from "../../assets/main/model_c.png";

function ModelList() {
  return (
    <div className="w-5/6 mx-auto py-20">
      <div className="flex relative">
        <Model image={imageAmg} name="AMG" link="configuration/amg" />
        <Model image={imgS} name="S-Class" link="/" />
      </div>
      <div className="flex relative">
        <Model image={imageCla} name="CLA-Class" link="/" />
        <Model image={imageC} name="C-Class" link="/" />
      </div>
    </div>
  );
}

export default ModelList;
