import React from "react";
import { useAuth } from "@/lib/auth";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
	const { theme, setTheme } = useTheme();

	const auth = useAuth();
	return (
		<nav className="h-20 px-8 shadow-lg border-black border-b-2 dark:border-white dark:bg-black">
			<div className="max-w-full h-full flex justify-between">
				<div className="flex items-center justify-center text-sm sm:text-xl">
					<Link href="/dashboard">Weback.</Link>
					<li className=" flex items-center justify-center ">
						{theme === "dark" ? (
							<a
								className="w-14 h-14 text-2xl  rounded-full  items-center justify-center flex px-1 hover:bg-opacity-80 transition duration-500 ease"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								<Image height="24" width="24" src="/moon.svg" />
							</a>
						) : (
							<a
								className="w-14 h-14 text-2xl rounded-full items-center justify-center flex px-1 hover:bg-opacity-80 transition duration-500 ease"
								onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							>
								<Image height="24" width="24" src="/sun.svg" />
							</a>
						)}
					</li>
				</div>
				{auth?.user ? (
					<ul className="max-w-full h-full flex items-center justify-center">
						<li>
							<button
								className="px-4 py-2 mx-4"
								onClick={(e) => auth.signout()}
							>
								Log out
							</button>
						</li>
						<li className="mx-4 hidden sm:block">
							<div>{auth.user ? auth.user.email : "None"}</div>
						</li>
						<li>
							<img
								className="rounded-full mx-4 w-12 border-black border-2 dark:border-white"
								src={auth.user.photoUrl}
							></img>
						</li>
					</ul>
				) : (
					<button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
