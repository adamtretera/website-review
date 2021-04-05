import React from "react";
import { useAuth } from "@/lib/auth";
import AddSiteModal from "./AddSiteModal";
const DashboardShell = ({ children }) => {
	const { user, signout } = useAuth();

	return (
		<main
			style={{ minHeight: "calc(100vh - 5rem)" }}
			className="h-full bg-gray-200 m-auto dark:bg-gray-900"
		>
			<div className="max-w-screen-xl px-16 m-auto py-8">
				<div className="flex justify-between items-center">
					<div>
						<h3 className="mb-1">Stránky</h3>
						<h1 className="text-4xl font-bold mb-6">Moje stránky</h1>
					</div>
					<div>
						<AddSiteModal />
					</div>
				</div>

				{children}
			</div>
		</main>
	);
};

export default DashboardShell;