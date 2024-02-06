import { T_linesData } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface interfaceState {
	navMenuIsOpen: boolean;
	linesData: T_linesData;
}

const initialState: interfaceState = {
	navMenuIsOpen: false,
	linesData: [
		{
			id: "1",
			isCompleted: false,
			width: 77,
			lineColor: "#ECAA00",
		},
		{
			id: "2",
			isCompleted: false,
			width: 27,
			lineColor: "#FC5B00",
		},
		{
			id: "3",
			isCompleted: true,
			width: 96,
			lineColor: "#009D10",
		},
		{
			id: "4",
			isCompleted: false,
			width: 62,
			lineColor: "#ECAA00",
		},
	],
};

export const interfaceSlice = createSlice({
	name: "interface",
	initialState: initialState,
	reducers: {
		toggleNavMenu: (state) => {
			state.navMenuIsOpen = !state.navMenuIsOpen;
		},
		calculateLineWidth(state, { payload }: PayloadAction<T_linesData>) {
			state.linesData = payload.map((line) => {
				let isCompleted = line.isCompleted;
				if (line.width >= 99) isCompleted = true;
				else if (line.width <= 1) isCompleted = false;

				let lineColor = line.lineColor;
				if (line.width > 90) lineColor = "#009D10";
				else if (line.width < 10) lineColor = "#FC5B00";
				else lineColor = "#ECAA00";

				const width = line.isCompleted ? line.width - 1 : line.width + 1;

				console.log(line);
				return { ...line, width: width, isCompleted: isCompleted, lineColor: lineColor };
			});
		},
	},
});

export const selectNavMenuIsOpen = (state: RootState) => state.interface.navMenuIsOpen;
export const selectLinesData = (state: RootState) => state.interface.linesData;

export const { toggleNavMenu, calculateLineWidth } = interfaceSlice.actions;

export default interfaceSlice.reducer;
