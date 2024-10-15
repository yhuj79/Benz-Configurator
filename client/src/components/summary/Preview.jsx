// Configuration Page 차량 요약 내역 Modal 이미지 Preview 컴포넌트
function Preview({ altText, imageUrl, scale }) {
  return (
    <div className="bg-black md:m-2 print:m-1 my-2 w-full md:w-1/2 print:w-1/2">
      <img
        className={`w-full pointer-events-none object-cover transition-opacity duration-300 ${scale}`}
        alt={altText}
        src={imageUrl}
      />
    </div>
  );
}

export default Preview;
