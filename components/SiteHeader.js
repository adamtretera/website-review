import React from "react";
import NextLink from "next/link";
import EditSiteModal from "@/components/EditSiteModal";
const SiteHeader = ({ isSiteOwner, site, siteId, route }) => {
	const siteName = site?.site;

	return (
		<>
			<div className="flex justify-between items-center">
				<div>
					<NextLink href="/sites">
						<h3 className="mb-1">Stránky</h3>
					</NextLink>
					<NextLink href={`/site/${siteId}`}>
						<h3>{siteName || "-"}</h3>
					</NextLink>
					{siteName && route && (
						<NextLink href={`/site/${siteId}/${route}`}>
							<h3>{route}</h3>
						</NextLink>
					)}
					<h1 className="text-4xl font-bold mb-6">{siteName || "-"}</h1>
				</div>
				{isSiteOwner && (
					<EditSiteModal settings={site?.settings} siteId={siteId} />
				)}
			</div>
		</>
	);
};

export default SiteHeader;
