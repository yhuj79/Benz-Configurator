// Viewer Image Url 생성

export const exteriorImageUrl = (name, styling, paint, wheels, degree) => {
  return `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/viewer/${name}/${name}-ex-${styling}-${paint}-${wheels}-${degree}.webp`;
};

export const interiorImageUrl = (name, seats, trim, steering, view) => {
  return `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/viewer/${name}/${name}-in-${view}-${seats}-${trim}-${steering}.webp`;
};

export const optionImageUrl = (option) => {
  return `https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/option/${option}.webp`;
};
