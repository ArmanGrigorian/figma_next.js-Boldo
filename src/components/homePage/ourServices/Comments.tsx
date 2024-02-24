"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectComments, switchComment } from "@/redux/slices/interfaceSlice";
import Image from "next/image";
import { MouseEvent } from "react";
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

const Comments = () => {
	const dispatch = useAppDispatch();
	const comments = useAppSelector(selectComments);

	function handleSwitch(e: MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();

		const button = e.target as HTMLButtonElement;

		switch (button.name) {
			case "next":
				dispatch(switchComment("next"));
				break;
			case "previous":
				dispatch(switchComment("previous"));
				break;
			default:
				break;
		}
	}

	return (
		<div className="rounded-sm shadow-xl bg-custom-dark-blue mt-20 p-20 max-lg:p-10 max-lg:mt-10 max-md:p-5 max-md:mt-0 dark:shadow-none">
			<div className="flex justify-between items-center mb-20 max-lg:mb-10 max-lg:flex-col">
				<h3 className="w-[70%] font-Manrope text-custom-white text-[40px] leading-[72px] max-md:text-3xl max-lg:w-full max-lg:text-center">
					An enterprise template to ramp up your company website
				</h3>

				<div className="mt-9 pr-3 flex justify-end items-center gap-10 max-md:w-full max-md:justify-center max-lg:pr-0">
					<button
						type="button"
						name="previous"
						onClick={handleSwitch}
						className="text-custom-white scale-[3] transition hover:text-custom-green active:scale-[2.9]">
						<IoArrowBackCircleOutline className="select-none pointer-events-none" />
					</button>
					<button
						className="text-custom-white scale-[3] transition hover:text-custom-green active:scale-[2.9]"
						type="button"
						name="next"
						onClick={handleSwitch}>
						<IoArrowForwardCircleOutline className="select-none pointer-events-none" />
					</button>
				</div>
			</div>

			<div className="flex justify-between items-start max-lg:justify-center max-lg:items-center">
				{comments.map((comment) => (
					<article
						key={comment.id}
						className={`${
							comment.isActive ? "lg:scale-110 max-lg:visible" : "lg:scale-100 max-lg:hidden"
						} w-[30%] h-fit p-5 bg-custom-white rounded-xl flex flex-col gap-3 shadow-xl shadow-custom-grey max-lg:w-[100%]`}>
						<p className="font-OpenSans text-lg font-normal text-custom-black max-lg:text-base">
							{comment.text}
						</p>

						<div className="flex items-center gap-3">
							<Image
								src={comment.avatar}
								width={58}
								height={58}
								alt={`avatar of ${comment.author}`}
								className="rounded-full w-12 h-12"
							/>
							<div>
								<h4 className="font-OpenSans font-bold text-base text-custom-dark-blue max-lg:text-sm">
									{comment.author}
								</h4>
								<strong className="font-OpenSans text-sm text-custom-dark-blue font-normal">
									{comment.role}
								</strong>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Comments;
