import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "options",
  initialState: {
    styling: "nsp",
    paint: "black",
    wheels: "20alloy",
    seats: "NapaBlack",
    trim: "BlackPiano",
    steering: "Napa",
  },
  reducers: {
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
  setStyling,
  setPaint,
  setWheels,
  setSeats,
  setTrim,
  setSteering,
} = optionsSlice.actions;
export default optionsSlice.reducer;
