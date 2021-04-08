import React from "react";
import AddSiteModal from "../AddSiteModal";
import Box from "../Box";

import DashboardShell from "../DashboardShell";

const FreePlanEmptyState = () => (
	<DashboardShell>
		<Box className="w-full bg-white p-4 justify-items-center align-center ">
			<h2>Získejte feedback na vaše stránky.</h2>
			<p>Začněte se rozvíjet.</p>
			<AddSiteModal />
		</Box>
	</DashboardShell>
);

export default FreePlanEmptyState;
