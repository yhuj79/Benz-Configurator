import Model from "./Model";

// Main Page 차량 카드 리스트 컴포넌트
function ModelList() {
  return (
    <div className="mx-auto mb-44 py-40 w-5/6">
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
          image={require("../../assets/main/model_eqs.webp")}
          name="EQS"
          link="/configuration/eqs"
        />
        <Model
          image={require("../../assets/main/model_g.webp")}
          name="G-Wagen"
          link="/configuration/gclass"
        />
      </div>
    </div>
  );
}

export default ModelList;
