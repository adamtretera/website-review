import React from "react";
import AddSiteModal from "./AddSiteModal";

const SiteTableHeader = () => (
	<>
		<div className="flex justify-between items-center">
			<div>
				<h3 className="mb-1">Stránky</h3>
				<h1 className="text-4xl font-bold mb-6">Moje stránky</h1>
			</div>
			<div>
				<AddSiteModal />
			</div>
		</div>
	</>
);

export default SiteTableHeader;
