// Viewer Image Url 생성

export const exteriorImageUrl = (styling, paint, wheels, degree) => {
  return `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-ex-${styling}-${paint}-${wheels}-${degree}.webp`;
};

export const interiorImageUrl = (seats, trim, steering, view) => {
  return `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/amg/amg-in-${view}-${seats}-${trim}-${steering}.webp`;
};
