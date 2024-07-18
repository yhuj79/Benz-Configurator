import RingLoader from "react-spinners/RingLoader";

function ViewerLoader() {

  const override: CSSProperties = {
    marginBottom: "70px",
  };

  return (
    <div className="flex justify-center items-center h-[93vh]">
      <RingLoader
        color={"#ffffff"}
        size={50}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default ViewerLoader;
