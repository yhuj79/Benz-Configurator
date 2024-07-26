import { createSlice } from "@reduxjs/toolkit";

// Redux 차량 옵션 관리
const calculateTotalPrice = (state, prices) => {
  return (
    prices.base +
    prices.styling[state.styling] +
    prices.paint[state.paint] +
    prices.wheels[state.wheels] +
    prices.seats[state.seats] +
    prices.trim[state.trim] +
    prices.steering[state.steering]
  );
};

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    name: "",
    fullName: "",
    styling: "",
    paint: "",
    wheels: "",
    seats: "",
    trim: "",
    steering: "",
    prices: {},
    totalPrice: 0,
  },
  reducers: {
    setInitialOptions: (state, action) => {
      const {
        name,
        fullName,
        styling,
        paint,
        wheels,
        seats,
        trim,
        steering,
        prices,
      } = action.payload;
      state.name = name;
      state.fullName = fullName;
      state.styling = styling[0];
      state.paint = paint[0];
      state.wheels = wheels[0];
      state.seats = seats[0];
      state.trim = trim[0];
      state.steering = steering[0];
      state.prices = prices;
      state.totalPrice = calculateTotalPrice(state, prices);
    },
    setStyling: (state, action) => {
      state.styling = action.payload;
      state.totalPrice = calculateTotalPrice(state, state.prices);
    },
    setPaint: (state, action) => {
      state.paint = action.payload;
      state.totalPrice = calculateTotalPrice(state, state.prices);
    },
    setWheels: (state, action) => {
      state.wheels = action.payload;
      state.totalPrice = calculateTotalPrice(state, state.prices);
    },
    setSeats: (state, action) => {
      state.seats = action.payload;
      state.totalPrice = calculateTotalPrice(state, state.prices);
    },
    setTrim: (state, action) => {
      state.trim = action.payload;
      state.totalPrice = calculateTotalPrice(state, state.prices);
    },
    setSteering: (state, action) => {
      state.steering = action.payload;
      state.totalPrice = calculateTotalPrice(state, state.prices);
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
