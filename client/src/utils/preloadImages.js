import {
  exteriorImageUrl,
  interiorImageUrl,
  optionImageUrl,
} from "./generateImageUrl";

// 차량 이미지 Pre Loading 처리
export const preloadImages = (data) => {
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

  // 차량 배경 이미지
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

  // // 비동기 작업 처리
  // const promises = images.map((src) => {
  //   return new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = resolve;
  //     img.onerror = reject;
  //   });
  // });

  // TEST
  const promises = images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        console.log(`Image loaded successfully: ${src.slice(82)}`);
        resolve();
      };

      img.onerror = (error) => {
        console.error(`Image failed to load: ${src.slice(82)}`, error);
        reject(error);
      };

      console.log(`Attempting to load image: ${src.slice(82)}`);
    });
  });

  Promise.all(promises)
    .then(() => {
      console.log("All images loaded successfully.");
    })
    .catch((error) => {
      console.error("One or more images failed to load.", error);
    });

  // Promise.all을 통해 모든 작업이 완료될 때까지 대기
  return Promise.all(promises);
};
