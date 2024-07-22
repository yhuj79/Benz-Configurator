import Model from "./Model";

function ModelList() {
  return (
    <div className="mx-auto py-20 w-5/6">
      <div className="relative md:flex">
        <Model
          image={require("../../assets/main/model_amg.webp")}
          name="AMG"
          link="configuration/amg"
        />
        <Model
          image={require("../../assets/main/model_s.webp")}
          name="S-Class"
          link="/configuration/sclass"
        />
      </div>
      <div className="relative md:flex">
        <Model
          image={require("../../assets/main/model_cla.webp")}
          name="CLA-Class"
          link="/"
        />
        <Model
          image={require("../../assets/main/model_c.webp")}
          name="C-Class"
          link="/"
        />
      </div>
    </div>
  );
}

export default ModelList;
