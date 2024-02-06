import { configureStore } from "@reduxjs/toolkit";
import interfaceReducer from "./slices/interfaceSlice";

export const store = configureStore({
	reducer: {
		interface: interfaceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
