import React from "react";
import AddSiteModal from "@/components/AddSiteModal";
import Box from "@/components/Box";

import DashboardShell from "@/components/DashboardShell";

const EmptyState = () => (
	<DashboardShell>
		<Box className="w-full bg-white p-4 justify-items-center align-center ">
			<h2>Zatím jste nepřidali žádné stránky.</h2>
			<p>Pojďme na to!</p>
			<AddSiteModal />
		</Box>
	</DashboardShell>
);

export default EmptyState;
