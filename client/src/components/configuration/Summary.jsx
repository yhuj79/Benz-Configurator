import { useSelector } from "react-redux";

function Summary() {
  const fullName = useSelector((state) => state.options.fullName);
  const totalPrice = useSelector((state) => state.options.totalPrice);

  return (
    <div className="top-0 left-0 z-30 absolute border-2 border-md-gray bg-black-gray m-4 p-4 rounded-lg">
      <h1 className="mx-2 font-bold text-head-line text-xl">{fullName}</h1>
      <div className="text-right mx-2 mt-2">
        <p className="text-desc text-xs">총 가격 (VAT 포함, OTR 제외)</p>
        <p className="font-bold text-head-line text-xl">
          {totalPrice.toLocaleString()} KRW
        </p>
      </div>
    </div>
  );
}

export default Summary;
