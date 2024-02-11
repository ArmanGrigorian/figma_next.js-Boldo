"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const LogInForm = () => {
	const route = useRouter();

	function handleLogIn(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		route.push("/");
	}

	return (
		<form onSubmit={handleLogIn} className="px-20 max-lg:px-10 max-md:px-5">
			<fieldset className="bg-custom-dark-blue w-[min(100%,600px)] m-auto p-9 shadow-xl rounded-tl-[56px] rounded-tr-[16px] rounded-br-[56px] rounded-bl-[16px] flex flex-col justify-center items-center dark:shadow-none">
				<label
					htmlFor="inputLogin"
					className="mb-1 text-custom-white text-lg font-bold tracking-wide">
					Login
				</label>
				<input
					className="border shadow-xl rounded w-full mb-3 py-1 px-5 peer/login"
					type="text"
					name="userLogin"
					id="inputLogin"
					required
				/>
				<p className="peer-valid/login:hidden text-custom-green">Login is required</p>

				<label
					htmlFor="inputPassword"
					className="mb-1 text-custom-white text-lg font-bold tracking-wide">
					Password
				</label>
				<input
					className="border shadow-xl rounded w-full mb-3 py-1 px-5 peer/password"
					type="password"
					name="userPassword"
					id="inputPassword"
					required
				/>
				<p className="peer-valid/password:hidden text-custom-green">Password is required</p>

				<input
					className="mt-3 w-44 h-14 tracking-wide flex justify-center items-center rounded-[56px] border-2 border-custom-white border-solid text-custom-white text-lg font-bold bg-custom-dark-blue hover:bg-custom-green hover:text-custom-dark-blue hover:border-custom-green active:scale-95 select-none max-md:w-32 max-md:h-12 max-md:text-sm"
					type="submit"
					value="Sign in"
				/>
			</fieldset>
		</form>
	);
};

export default LogInForm;
