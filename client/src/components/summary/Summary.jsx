import { useSelector } from "react-redux";

import Modal from "../summary/Modal";

function Summary() {
  const fullName = useSelector((state) => state.options.fullName);
  const totalPrice = useSelector((state) => state.options.totalPrice);

  return (
    <div className="top-0 left-0 z-30 md:absolute sticky md:border-2 md:border-md-gray bg-black-gray md:m-4 px-6 py-4 border-b-2 border-b-md-gray md:rounded-lg md:min-w-[360px]">
      <h1 className="font-bold text-head-line text-lg md:text-xl">
        {fullName}
      </h1>
      <div className="flex justify-between items-center pt-3">
        <Modal totalPrice={totalPrice} />
        <div className="text-right mt-1">
          <p className="text-desc text-xs">Drive Away Price*</p>
          <p className="font-bold text-head-line text-lg md:text-xl">
            {totalPrice.toLocaleString()} KRW
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
