import React from "react";
import { useAuth } from "../lib/auth";

function Navbar() {
	const auth = useAuth();

	return (
		<nav className="max-w-full h-full flex justify-between">
			<div>
				<button>Logo</button>
			</div>

			{auth?.user ? (
				<div>
					<button onClick={(e) => auth.signout()}>Sign Out</button>
					<div>{auth?.user?.email}</div>
				</div>
			) : (
				<button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
			)}
		</nav>
	);
}

export default Navbar;
