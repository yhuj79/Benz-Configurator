import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    styling: "",
    paint: "",
    wheels: "",
    seats: "",
    trim: "",
    steering: "",
  },
  reducers: {
    // 옵션 초기 상태를 선택 차량 첫 번째 옵션으로 설정
    setInitialOptions: (state, action) => {
      state.styling = action.payload.styling[0];
      state.paint = action.payload.paint[0];
      state.wheels = action.payload.wheels[0];
      state.seats = action.payload.seats[0];
      state.trim = action.payload.trim[0];
      state.steering = action.payload.steering[0];
    },
    // 옵션 상태 변경
    setStyling: (state, action) => {
      state.styling = action.payload;
    },
    setPaint: (state, action) => {
      state.paint = action.payload;
    },
    setWheels: (state, action) => {
      state.wheels = action.payload;
    },
    setSeats: (state, action) => {
      state.seats = action.payload;
    },
    setTrim: (state, action) => {
      state.trim = action.payload;
    },
    setSteering: (state, action) => {
      state.steering = action.payload;
    },
  },
});

export const {
  setInitialOptions,
  setStyling,
  setPaint,
  setWheels,
  setSeats,
  setTrim,
  setSteering,
} = optionsSlice.actions;

export default optionsSlice.reducer;
