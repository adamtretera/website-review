import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import { parseISO, format } from "date-fns";
import Link from "next/link";
import { cs } from "date-fns/locale";
import DeleteSiteButton from "./DeleteSiteButton";

const SiteTable = ({ sites }) => {
	return (
		<Table>
			<thead>
				<Tr className="border-black border-2 dark:border-white bg-white dark:bg-black">
					<Th>Název stránky</Th>
					<Th>URl adresa</Th>
					<Th>Feedback link</Th>
					<Th>Datum přídání</Th>
					<Th></Th>
				</Tr>
			</thead>
			<tbody>
				{sites.map((site) => (
					<tr
						className="bg-white hover:bg-gray-200 transition ease-in duration-100 dark:bg-black"
						key={site.url}
					>
						<Td>{site.site}</Td>
						<Td>{site.url}</Td>
						<Td>
							<Link href={`/site/${site.id}`}>
								<a className="cursor-pointer hover:underline ">
									Podívat se na feedback
								</a>
							</Link>
						</Td>
						<Td>
							{format(parseISO(site.createdAt), "d. MMM y", { locale: cs })}
						</Td>
						<Td>
							<DeleteSiteButton siteId={site.id} />
						</Td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default SiteTable;
