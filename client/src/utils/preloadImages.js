import { exteriorImageUrl, interiorImageUrl } from "./generateImageUrl";

// 선택 차량 Image Pre Loading
export const preloadImages = (options) => {
  const images = [];
  const degrees = Array.from({ length: 36 }, (_, i) => i + 1);

  // Styling Package, Paint, Wheels 옵션 순회
  options.styling.forEach((styling) => {
    options.paint.forEach((paint) => {
      options.wheels.forEach((wheels) => {
        degrees.forEach((degree) => {
          images.push(exteriorImageUrl(styling, paint, wheels, degree));
        });
      });
    });
  });

  // Seats, Trim, Steering 옵션 순회
  options.seats.forEach((seats) => {
    options.trim.forEach((trim) => {
      options.steering.forEach((steering) => {
        images.push(interiorImageUrl(seats, trim, steering, "s"));
        images.push(interiorImageUrl(seats, trim, steering, "f"));
      });
    });
  });

  // 비동기 작업 처리
  const promises = images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  // Promise.all을 통해 모든 작업이 완료될 때까지 대기
  return Promise.all(promises);
};
