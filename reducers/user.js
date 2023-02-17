import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { nickname: null, places: [], databasePlaces: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateNickname: (state, action) => {
      state.value.nickname = action.payload;
    },
    addPlace: (state, action) => {
      state.value.places.push(action.payload);
    },
    removePlace: (state, action) => {
      state.value.places = state.value.places.filter(
        (e) => e.name !== action.payload
      );
    },
    retrieveFromDB: (state, action) => {
      state.value.databasePlaces = action.payload;
    },
  },
});

export const { updateNickname, addPlace, removePlace, retrieveFromDB } =
  userSlice.actions;
export default userSlice.reducer;
