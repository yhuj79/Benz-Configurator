import {
  exteriorImageUrl,
  interiorImageUrl,
  optionImageUrl,
} from "./generateImageUrl";

// 기본 옵션에 대한 이미지 프리로딩
export const preloadInitialize = (data) => {
  const images = [];
  const degrees = Array.from({ length: 36 }, (_, i) => i + 1);

  const defaultStyling = data.styling[0]; // 첫 번째 스타일링
  const defaultPaint = data.paint[0]; // 첫 번째 페인트
  const defaultWheels = data.wheels[0]; // 첫 번째 휠
  const defaultSeats = data.seats[0]; // 첫 번째 시트
  const defaultTrim = data.trim[0]; // 첫 번째 트림
  const defaultSteering = data.steering[0]; // 첫 번째 스티어링

  // 기본 Exterior 이미지들 프리로딩
  degrees.forEach((degree) => {
    images.push(
      exteriorImageUrl(
        data.name,
        defaultStyling,
        defaultPaint,
        defaultWheels,
        degree
      )
    );
  });

  // 기본 Interior 이미지들 프리로딩
  images.push(
    interiorImageUrl(data.name, defaultSeats, defaultTrim, defaultSteering, "s")
  );
  images.push(
    interiorImageUrl(data.name, defaultSeats, defaultTrim, defaultSteering, "f")
  );

  // 차량 배경 이미지 프리로딩
  images.push(
    `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/viewer/background.webp`
  );
  images.push(
    `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/viewer/sliderstage.webp`
  );

  // 옵션 아이콘 이미지
  const addOptionImages = (optionArray) => {
    optionArray.forEach((option) => {
      images.push(optionImageUrl(option));
    });
  };
  addOptionImages(data.styling);
  addOptionImages(data.paint);
  addOptionImages(data.wheels);
  addOptionImages(data.seats);
  addOptionImages(data.trim);
  addOptionImages(data.steering);

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

// 페이지 렌더링 후 전체 옵션 이미지 프리로딩
export const preloadBackground = (data) => {
  const images = [];
  const degrees = Array.from({ length: 36 }, (_, i) => i + 1);

  // Styling Package, Paint, Wheels 옵션 순회
  data.styling.forEach((styling) => {
    data.paint.forEach((paint) => {
      data.wheels.forEach((wheels) => {
        degrees.forEach((degree) => {
          images.push(
            exteriorImageUrl(data.name, styling, paint, wheels, degree)
          );
        });
      });
    });
  });

  // Seats, Trim, Steering 옵션 순회
  data.seats.forEach((seats) => {
    data.trim.forEach((trim) => {
      data.steering.forEach((steering) => {
        images.push(interiorImageUrl(data.name, seats, trim, steering, "s"));
        images.push(interiorImageUrl(data.name, seats, trim, steering, "f"));
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
