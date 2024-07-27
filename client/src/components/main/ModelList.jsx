import Model from "./Model";

// Main Page 차량 카드 리스트 컴포넌트
function ModelList({ type, mb, py, nOverSix }) {
  return (
    <div className={`mx-auto mb-${mb} py-${py} w-${nOverSix}/6`}>
      <div className="relative md:flex">
        <Model
          image={require("../../assets/main/model_amg.webp")}
          name="AMG"
          link="/configuration/amg"
          type={type}
        />
        <Model
          image={require("../../assets/main/model_s.webp")}
          name="S-Class"
          link="/configuration/sclass"
          type={type}
        />
      </div>
      <div className="relative md:flex">
        <Model
          image={require("../../assets/main/model_eqs.webp")}
          name="EQS"
          link="/configuration/eqs"
          type={type}
        />
        <Model
          image={require("../../assets/main/model_g.webp")}
          name="G-Wagen"
          link="/configuration/gclass"
          type={type}
        />
      </div>
    </div>
  );
}

export default ModelList;
