import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavigationState {
  selectedTab: string;
  mobileMenuOpen: boolean;
}

const initialState: NavigationState = {
  selectedTab: "",
  mobileMenuOpen: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSelectedTab: (state, action: PayloadAction<string>) => {
      return { ...state, selectedTab: action.payload };
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      return { ...state, mobileMenuOpen: action.payload };
    },
    toggleMobileMenuOpen: (state) => {
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
    },
  },
});

export const { setSelectedTab, setMobileMenuOpen, toggleMobileMenuOpen } =
  navigationSlice.actions;

export default navigationSlice.reducer;
