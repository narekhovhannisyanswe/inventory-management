import { createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  isDarkMode: boolean;
  isSidebarCollapsed: boolean;
}

const initialState = { isDarkMode: false, isSidebarCollapsed: false } satisfies InitialStateType as InitialStateType;

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    setIsSidebarCollapsed: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions;
export default globalSlice.reducer;
