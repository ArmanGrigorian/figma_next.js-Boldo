import { advantageList_C } from "@/data/data";

const Bottom = () => {
	return (
		<div className="flex justify-between items-start p-20 max-lg:flex-col max-lg:p-10 max-md:p-5">
			<h3 className="max-w-[450px] text-3xl font-semibold text-custom-dark-blue  leading-[42px] max-md:text-xl">
				We connect our customers with the best, and help them keep up-and stay open.
			</h3>

			<ul>
				{advantageList_C.map((listItem) => (
					<li key={listItem.id} className="flex justify-between items-center gap-3 my-3">
						<strong className="leading-8 text-lg text-custom-dark-blue font-OpenSans font-normal max-md:text-base">
							{listItem.text}
						</strong>
						{listItem.icon}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Bottom;
