import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface interfaceState {
	navMenuIsOpen: boolean;
}

const initialState: interfaceState = {
	navMenuIsOpen: false,
};

export const interfaceSlice = createSlice({
	name: "interface",
	initialState: initialState,
	reducers: {
		toggleNavMenu: (state) => {
			state.navMenuIsOpen = !state.navMenuIsOpen;
		},
	},
});

export const selectNavMenuIsOpen = (state: RootState) => state.interface.navMenuIsOpen;

export const { toggleNavMenu } = interfaceSlice.actions;

export default interfaceSlice.reducer;
