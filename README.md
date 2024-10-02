# Benz-Configurator

<img align=top src="https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/thumbnail.png" width="600">

360° 뷰어 기능이 있는 나만의 차량 구성 사이트

:ballot_box_with_check: <a target="_blank" rel="noopener noreferrer" href="https://benz-configurator.vercel.app">Benz Configurator</a>

## Built With

<p>
  <img alt="React" src="https://img.shields.io/badge/React-51CBF3?style=flat&logo=react&logoColor=white" height=25 />
  <img alt="Redux" src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white" height=25 />
  <img alt="Tailwind" src="https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white" height=25 />
  <img alt="MUI" src="https://img.shields.io/badge/MUI-007FFF?style=flat&logo=MUI&logoColor=white" height=25 />
  <img alt="ChakraUI" src="https://img.shields.io/badge/ChakraUI-319795?style=flat&logo=chakraui&logoColor=white" height=25 />
</p>

## About The Project

### :alarm_clock: 제작 기간

- 2024.07.03 ~ 2024.07.29

### :gear: 개발 환경

- Visual Studio Code
- React.js 18.3.1

### :clipboard: 주요 적용 사항

<div>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/7.png width=400>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/8.png width=400>
</div>

<br>

- 메인 화면 차량 리스트에 [Loading Skeleton](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/common/Model.jsx) 적용
- 백그라운드 인트로 영상 [Banner](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/main/Banner.jsx)
- 페이지 전환 [Blur Animation](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/common/AnimatedPage.jsx)

<br>

<div>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/1.png width=400>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/2.png width=400>
</div>

<br>

- [Drag Event](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/hooks/useExteriorHandler.js)를 통해 [360° 뷰어 기능](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/configuration/Viewer.jsx) 구현
- 부드러운 이미지 전환을 위한 [Image Pre Loading](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/utils/preloadImages.js) 처리 ([원리 관련 내용](https://yhuj79.github.io/React/240608))
- [Redux](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/features/optionsSlice.js)로 차량, 옵션, 가격 정보 제어 ([SideBar](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/configuration/SideBar.jsx)에서 옵션 설정)

<br>

<div>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/3.png width=400>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/4.png width=400>
</div>

<br>

- 옵션 카테고리에 따라 차량 실내 모습 전환
- [Reset](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/configuration/Reset.jsx) 버튼으로 옵션 기본값으로 초기화

<br>

<div>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/5.png width=400>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/6.png width=400>
</div>

<br>

- 차량 전환 [Modal](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/summary/Change.jsx) (Chakra UI 적용)
- 구성한 차량 요약 내역 확인 [Modal](https://github.com/yhuj79/Benz-Configurator/blob/main/client/src/components/summary/Modal.jsx)
- 요약 내역 인쇄 기능 (react-to-print 라이브러리 사용)

<br>

<div>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/9.png width=200>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/10.png width=200>
    <img align=top src=https://raw.githubusercontent.com/yhuj79/Benz-Configurator/main/client/src/assets/readme/11.png width=200>
</div>

<br>

- 반응형 디자인 적용

<br>

### :notebook: 프로젝트 구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂main
 ┃ ┣ 📂option
 ┃ ┣ 📂readme
 ┃ ┣ 📂viewer
 ┃ ┃ ┣ 📂amg
 ┃ ┃ ┣ 📂eqs
 ┃ ┃ ┣ 📂gclass
 ┃ ┃ ┗ 📂sclass
 ┃ ┗ 📜data.json
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜AnimatedPage.jsx
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┣ 📜MenuBar.jsx
 ┃ ┃ ┣ 📜Model.jsx
 ┃ ┃ ┗ 📜ModelList.jsx
 ┃ ┣ 📂configuration
 ┃ ┃ ┣ 📜Caution.jsx
 ┃ ┃ ┣ 📜Reset.jsx
 ┃ ┃ ┣ 📜Selector.jsx
 ┃ ┃ ┣ 📜SideBar.jsx
 ┃ ┃ ┗ 📜Viewer.jsx
 ┃ ┣ 📂main
 ┃ ┃ ┗ 📜Banner.jsx
 ┃ ┗ 📂summary
 ┃   ┣ 📜Change.jsx
 ┃   ┣ 📜Modal.jsx
 ┃   ┣ 📜Preview.jsx
 ┃   ┣ 📜Summary.jsx
 ┃   ┗ 📜Table.jsx
 ┣ 📂features
 ┃ ┗ 📜optionsSlice.js
 ┣ 📂hooks
 ┃ ┣ 📜useExteriorHandler.js
 ┃ ┣ 📜usePreventScroll.js
 ┃ ┗ 📜useScrollToTop.js
 ┣ 📂pages
 ┃ ┣ 📜Configuration.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂redux
 ┃ ┗ 📜store.js
 ┣ 📂utils
 ┃ ┣ 📜generateImageUrl.js
 ┃ ┣ 📜preloadImages.js
 ┃ ┗ 📜scrollControl.js
 ┗ 📜App.jsx
```

### :open_file_folder: Package

- [x] reduxjs/toolkit 2.2.6
- [x] tailwindcss 3.4.4
- [x] mui/icons-material 5.16.4
- [x] chakra-ui/react 2.8.2
- [x] clsx 2.1.1
- [x] framer-motion 11.3.8
- [x] react-device-detect 2.2.3
- [x] react-loading-skeleton 3.4.0
- [x] react-spinners 0.14.1
- [x] react-to-print 2.15.1
- [x] swiper 11.1.5

## Trouble Shooting

- [페이지 이동 시 스크롤 위치 문제](https://github.com/yhuj79/Benz-Configurator/wiki/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99-%EC%8B%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%9C%84%EC%B9%98-%EB%AC%B8%EC%A0%9C)
- [React‐to‐Print 인쇄 스타일링 문제](https://github.com/yhuj79/Benz-Configurator/wiki/React%E2%80%90to%E2%80%90Print-%EC%9D%B8%EC%87%84-%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81-%EB%AC%B8%EC%A0%9C)
- [Main Page 인트로 영상 문제](https://github.com/yhuj79/Benz-Configurator/wiki/Main-Page-%EC%9D%B8%ED%8A%B8%EB%A1%9C-%EC%98%81%EC%83%81-%EB%AC%B8%EC%A0%9C)
- [Exterior Viewer 이미지 끊김 문제](https://github.com/yhuj79/Benz-Configurator/wiki/Exterior-Viewer-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%81%8A%EA%B9%80-%EB%AC%B8%EC%A0%9C)
- [Pre Loading 속도 문제](https://github.com/yhuj79/Benz-Configurator/wiki/%08Pre-Loading-%EC%86%8D%EB%8F%84-%EB%AC%B8%EC%A0%9C)

## Reference

[https://www.mercedes-benz.com/en/](https://www.mercedes-benz.com/en/)

[https://www.lamborghini.com/en-en](https://www.lamborghini.com/en-en)

[https://tailwindcss.com](https://tailwindcss.com)

[https://v2.chakra-ui.com](https://v2.chakra-ui.com)

[https://mui.com/material-ui/material-icons](https://mui.com/material-ui/material-icons)

[https://velog.io/@kec0130/react-to-print](https://velog.io/@kec0130/react-to-print)

[https://velog.io/@leejungho9/React-Router-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99-%EC%9D%B4%EB%8F%99-%ED%9B%84-%EC%B5%9C%EC%83%81%EB%8B%A8%EC%9C%BC%EB%A1%9C-%EC%9E%90%EB%8F%99-%EC%8A%A4%ED%81%AC%EB%A1%A4](https://velog.io/@leejungho9/React-Router-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99-%EC%9D%B4%EB%8F%99-%ED%9B%84-%EC%B5%9C%EC%83%81%EB%8B%A8%EC%9C%BC%EB%A1%9C-%EC%9E%90%EB%8F%99-%EC%8A%A4%ED%81%AC%EB%A1%A4)

[https://pshdev1030.github.io/2022/02/10/React-Image-preload](https://pshdev1030.github.io/2022/02/10/React-Image-preload)

[https://yhuj79.github.io/React/240608](https://yhuj79.github.io/React/240608)

[https://yhuj79.github.io/React/240713](https://yhuj79.github.io/React/240713)