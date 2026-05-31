import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sessions: 0 },
  reducers: {
    setSessions: (state, action: PayloadAction<number>) => {
      state.sessions = action.payload;
    },
  },
});

export const { setSessions } = uiSlice.actions;
export default uiSlice.reducer;
