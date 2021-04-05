import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import { parseISO, format } from "date-fns";
import Link from "next/link";
import { cs } from "date-fns/locale";

const SiteTable = ({ sites }) => {
	return (
		<Table>
			<thead>
				<Tr className="border-black border-2 dark:border-white">
					<Th>Název stránky</Th>
					<Th>URl adresa</Th>
					<Th>Feedback link</Th>
					<Th>Datum přídání</Th>
				</Tr>
			</thead>
			<tbody>
				{sites.map((site) => (
					<tr key={site.url}>
						<Td fontWeight="medium">{site.site}</Td>
						<Td>{site.url}</Td>
						<Td>
							<Link href={"#"}>
								<span className="underline cursor-pointer">
									Podívat se na feedback
								</span>
							</Link>
						</Td>
						<Td>
							{format(parseISO(site.createdAt), "d. MMM y", { locale: cs })}
						</Td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default SiteTable;
