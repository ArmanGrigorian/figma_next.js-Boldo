"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { calculateLineWidth, selectLines } from "@/redux/slices/interfaceSlice";
import { Line } from "..";
import { useEffect } from "react";

const Lines = () => {
	const dispatch = useAppDispatch();
	const lines = useAppSelector(selectLines);

	useEffect(() => {
		const calculate = () => {
			dispatch(calculateLineWidth(lines));
		};

		const timeoutId = setTimeout(calculate, 3000);

		return () => clearTimeout(timeoutId);
	}, [dispatch, lines]);

	return (
		<div className="h-full flex flex-col justify-center gap-2">
			{lines.map((line) => (
				<Line key={line.id} {...line} />
			))}
		</div>
	);
};

export default Lines;
