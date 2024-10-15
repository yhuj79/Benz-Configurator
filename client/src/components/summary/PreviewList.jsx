import Preview from "./Preview";

import {
  exteriorImageUrl,
  interiorImageUrl,
} from "../../utils/generateImageUrl";

// Configuration Page 차량 요약 내역 Modal PreviewList 컴포넌트
function PreviewList({ options }) {
  return (
    <div>
      <div className="flex md:flex-row print:flex-row flex-col justify-between">
        <Preview
          altText="summary-exterior-1"
          imageUrl={exteriorImageUrl(
            options.name,
            options.styling,
            options.paint,
            options.wheels,
            2
          )}
          scale="scale-125"
        />
        <Preview
          altText="summary-exterior-2"
          imageUrl={exteriorImageUrl(
            options.name,
            options.styling,
            options.paint,
            options.wheels,
            20
          )}
          scale="scale-125"
        />
      </div>
      <div className="flex md:flex-row print:flex-row flex-col justify-between">
        <Preview
          altText="summary-interior-s"
          imageUrl={interiorImageUrl(
            options.name,
            options.seats,
            options.trim,
            options.steering,
            "s"
          )}
          scale=""
        />
        <Preview
          altText="summary-interior-f"
          imageUrl={interiorImageUrl(
            options.name,
            options.seats,
            options.trim,
            options.steering,
            "f"
          )}
          scale=""
        />
      </div>
    </div>
  );
}

export default PreviewList;
