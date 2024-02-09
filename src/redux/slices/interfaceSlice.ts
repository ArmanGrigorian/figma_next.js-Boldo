import { commentsData, linesData } from "@/data/data";
import { T_linesData, interfaceState } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState: interfaceState = {
	navMenuIsOpen: false,
	lines: linesData,
	comments: commentsData,
};

export const interfaceSlice = createSlice({
	name: "interface",
	initialState: initialState,
	reducers: {
		toggleNavMenu: (state) => {
			state.navMenuIsOpen = !state.navMenuIsOpen;
		},
		calculateLineWidth(state, { payload }: PayloadAction<T_linesData>) {
			state.lines = payload.map((line) => {
				let isCompleted = line.isCompleted;
				if (line.width >= 99) isCompleted = true;
				else if (line.width <= 1) isCompleted = false;

				let lineColor = line.lineColor;
				if (line.width >= 80) lineColor = "#1eaa1e";
				else if (line.width >= 20) lineColor = "#e6ebeb";
				else lineColor = "#f00a0a";

				const width = line.isCompleted ? line.width - 1 : line.width + 1;

				return { ...line, width: width, isCompleted: isCompleted, lineColor: lineColor };
			});
		},
		switchComment: (state, { payload }: PayloadAction<string>) => {
			let idx = 2;
			state.comments.forEach((comment) => {
				if (comment.isActive) {
					idx = Number(comment.id);
					comment.isActive = false;
				}
			});

			if (payload === "next") {
				idx = (idx + 1) % state.comments.length;
			} else if (payload === "previous") {
				idx = (idx - 1 + state.comments.length) % state.comments.length;
			}

			state.comments[idx].isActive = true;
		},
	},
});

export const selectComments = (state: RootState) => state.interface.comments;
export const selectNavMenuIsOpen = (state: RootState) => state.interface.navMenuIsOpen;
export const selectLines = (state: RootState) => state.interface.lines;

export const { toggleNavMenu, calculateLineWidth, switchComment } = interfaceSlice.actions;

export default interfaceSlice.reducer;
