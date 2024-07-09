import ThreeSixty from "react-360-view";

function Viewer() {
  return (
    <div
      style={{
        width: "70%",
        alignItems: "center",
        border: "2px solid black",
        margin: "30px auto",
        position: "relative",
      }}
    >
      <ThreeSixty
        amount={75}
        imagePath="https://fastly-production.24c.in/webin/360"
        fileName="output_{index}.jpeg"
        spinReverse
      />
    </div>
  );
}

export default Viewer;
