import React from "react";
import { useAuth } from "@/lib/auth";
const DashboardShell = ({ children }) => {
	const { user, signout } = useAuth();

	return (
		<main
			style={{ minHeight: "calc(100vh - 5rem)" }}
			className="h-full bg-gray-200 m-auto dark:bg-gray-900"
		>
			<div className="max-w-screen-xl px-16 m-auto py-8">{children}</div>
		</main>
	);
};

export default DashboardShell;
