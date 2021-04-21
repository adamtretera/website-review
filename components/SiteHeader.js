import React from "react";
import NextLink from "next/link";

const SiteHeader = ({ siteName }) => (
	<>
		<div className="flex justify-between items-center">
			<div>
				<NextLink href="/sites" passHref>
					<h3 className="mb-1">Stránky</h3>
				</NextLink>

				<h1 className="text-4xl font-bold mb-6">{siteName || "-"}</h1>
			</div>
		</div>
	</>
);

export default SiteHeader;
