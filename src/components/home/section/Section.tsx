import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaCircleCheck } from "react-icons/fa6";
import { FiFeather } from "react-icons/fi";
import { IoEyeOutline, IoSunnyOutline } from "react-icons/io5";

const Section = () => {
	return (
		<>
			<div className="snap-center p-10 max-md:p-5  min-h-screen">
				<p className="text-center text-custom-light-grey font-normal font-OpenSans text-lg">
					Our Services
				</p>

				<h2 className="max-w-[842px] mx-auto text-center text-[40px] text-custom-black leading-[72px] max-md:text-[28px] max-md:w-[90%] max-md:leading-[42px] max-sm:w-full">
					Handshake infographic mass market crowdfunding iteration.
				</h2>

				<div className="flex justify-between items-center py-14">
					<div className="w-[26%] p-5">
						<Image
							className="rounded-3xl w-full mb-5"
							src="/images/working.png"
							width={300}
							height={354}
							alt="working man png"
						/>
						<h4 className="text-2xl font-OpenSans font-normal text-custom-black leading-9">
							Cool feature title
						</h4>
						<p className="text-lg font-OpenSans font-normal text-custom-light-grey leading-8">
							Learning curve network effects return on investment.
						</p>
						<Link
							className="flex justify-start items-center gap-2 font-OpenSans text-lg font-bold text-custom-dark-blue leading-9"
							href="/about ">
							Explore page <FaArrowRightLong />
						</Link>
					</div>

					<div className="w-[26%] p-5">
						<Image
							className="rounded-3xl w-full mb-5"
							src="/images/people.png"
							width={300}
							height={354}
							alt="people png"
						/>
						<h4 className="text-2xl font-OpenSans font-normal text-custom-black leading-9">
							Even cooler feature
						</h4>
						<p className="text-lg font-OpenSans font-normal text-custom-light-grey leading-8">
							Learning curve network effects return on investment.
						</p>
						<Link
							className="flex justify-start items-center gap-2 font-OpenSans text-lg font-bold text-custom-dark-blue leading-9"
							href="/blog">
							Explore page <FaArrowRightLong />
						</Link>
					</div>

					<div className="w-[26%] p-5">
						<Image
							className="rounded-3xl w-full mb-5"
							src="/images/buildings.png"
							width={300}
							height={354}
							alt="buildings png"
						/>
						<h4 className="text-2xl font-OpenSans font-normal text-custom-black leading-9">
							Cool feature title
						</h4>
						<p className="text-lg font-OpenSans font-normal text-custom-light-grey leading-8">
							Learning curve network effects return on investment.
						</p>
						<Link
							className="flex justify-start items-center gap-2 font-OpenSans text-lg font-bold text-custom-dark-blue leading-9"
							href="/about">
							Explore page <FaArrowRightLong />
						</Link>
					</div>
				</div>
			</div>

			<div className="snap-center min-h-screen p-10 max-md:p-5">
				<div>
					<div className="relative bg-man">
						<Image
							className="absolute"
							src="/images/incomeGraph.png"
							width={227}
							height={340}
							alt="income graph png"
						/>
					</div>

					<div>
						<h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
						<ul>
							<li>
								<FaCircleCheck />
								<strong>We connect our customers with the best.</strong>
							</li>

							<li>
								<FaCircleCheck />
								<strong>Advisor success customer launch party.</strong>
							</li>
							<li>
								<FaCircleCheck />
								<strong>Business-to-consumer long tail.</strong>
							</li>
						</ul>

						<Link href="/about">Start now</Link>
					</div>
				</div>
				<div>
					<div>
						<h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
						<ul>
							<li>
								<FiFeather />
								<strong>We connect our customers with the best.</strong>
							</li>
							<li>
								<IoEyeOutline />
								<strong>Advisor success customer launch party.</strong>
							</li>
							<li>
								<IoSunnyOutline />
								<strong>Business-to-consumer long tail.</strong>
							</li>
						</ul>
					</div>

					<div className="relative bg-woman">
						<Image
							className="absolute"
							src="/images/circleGraph.png"
							width={227}
							height={340}
							alt="circle graph png"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Section;
