import React from "react";
import { Table, Tr, Th, Td } from "./Table";

const SkeletonRow = () => (
	<tr>
		<Td>
			<div className="bg-gray-100 h-4  animate-pulse dark:bg-gray-800"></div>
		</Td>
		<Td>
			<div className="bg-gray-100 h-4  animate-pulse dark:bg-gray-800"></div>
		</Td>
		<Td>
			<div className="bg-gray-100 h-4  animate-pulse dark:bg-gray-800"></div>
		</Td>
		<Td>
			<div className="bg-gray-100 h-4  animate-pulse dark:bg-gray-800"></div>
		</Td>
	</tr>
);

const SiteTableSkeleton = () => {
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
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
				<SkeletonRow />
			</tbody>
		</Table>
	);
};

export default SiteTableSkeleton;