"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { calculateLineWidth, selectLinesData } from "@/redux/slices/interfaceSlice";
import { Line } from "..";
import { useEffect } from "react";

const Lines = () => {
	const dispatch = useAppDispatch();
	const linesData = useAppSelector(selectLinesData);

	useEffect(() => {
		const calculate = () => {
			dispatch(calculateLineWidth(linesData));
		};

		const timeoutId = setTimeout(calculate, 4000);

		return () => clearTimeout(timeoutId);
	}, [dispatch, linesData]);

	return (
		<div className="h-full flex flex-col justify-center gap-4 pb-3">
			{linesData.map((lineData) => (
				<Line key={lineData.id} {...lineData} />
			))}
		</div>
	);
};

export default Lines;
