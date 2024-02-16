"use client";
import { newsFeedData } from "@/data/data";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	goToNext,
	goToPrevious,
	goToSlide,
	selectCurrentIndex,
} from "@/redux/slices/interfaceSlice";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Slider = () => {
	const dispatch = useAppDispatch();
	const currentIndex = useAppSelector(selectCurrentIndex);
	const timerRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		timerRef.current = setInterval(() => {
			dispatch(goToNext());
		}, 6000);

		return () => {
			clearInterval(timerRef.current);
		};
	}, [dispatch]);

	return (
		<div className="px-20 pb-10 max-lg:px-10 max-lg:pb-5 max-md:px-5 max-md:pb-[5px]]">
			<div className="w-100% h-fit">
				<div className="relative h-full">
					<div>
						<div
							onClick={() => {
								dispatch(goToPrevious());
							}}
							className="select-none absolute top-[50%] left-0 translate-y-[-50%] z-10 cursor-pointer text-custom-green text-6xl drop-shadow-xl">
							❰
						</div>
						<div
							onClick={() => {
								dispatch(goToNext());
							}}
							className="select-none absolute top-[50%] right-0 translate-y-[-50%] z-10 cursor-pointer text-custom-green text-6xl drop-shadow-xl">
							❱
						</div>
					</div>

					<div className="w-full h-full bg-cover bg-center">
						<article className="flex flex-wrap justify-around items-center gap-10 px-20 pb-20 max-lg:px-10 max-lg:pb-10 max-md:px-5 max-md:pb-5">
							<Image
								src={newsFeedData[currentIndex].imgSrc}
								width={400}
								height={300}
								alt={newsFeedData[currentIndex].imgAlt}
								className="select-none w-[min(470px,70%)] aspect-[9/6] rounded-[32px] shadow-xl"
							/>

							<div className="w-[40%] max-lg:w-[70%]">
								<p className="select-none mt-3 text-custom-grey font-OpenSans text-sm font-normal leading-7  dark:text-custom-white">
									<strong className="leading-7 mr-2 font-OpenSans font-bold text-base text-custom-dark-blue dark:text-custom-white">
										Category
									</strong>
									{newsFeedData[currentIndex].date}
								</p>

								<h2 className="whitespace-nowrap font-Manrope overflow-hidden text-ellipsis select-none font-semibold text-[40px] leading-[72px] max-md:text-[28px]  max-md:leading-[42px] max-sm:w-full dark:text-custom-white">
									{newsFeedData[currentIndex].text}
								</h2>

								<div className="flex items-center gap-2">
									<Image
										src={newsFeedData[currentIndex].avatar}
										width={32}
										height={32}
										alt={`${newsFeedData[currentIndex].author}'s avatar`}
										className="rounded-full shadow-xl"
									/>
									<p className="select-none leading-7 font-OpenSans font-medium text-base text-custom-black  dark:text-custom-white">
										{newsFeedData[currentIndex].author}
									</p>
								</div>
							</div>
						</article>
					</div>

					<div className="flex justify-center gap-2">
						{newsFeedData.map((slide, slideIndex: number) => {
							return (
								<div
									className={`${
										slideIndex === currentIndex ? "scale-125" : "scale-100"
									} text-custom-green text-xl cursor-pointer`}
									key={slideIndex}
									onClick={() => dispatch(goToSlide(slideIndex))}>
									●
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
