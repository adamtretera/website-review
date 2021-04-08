import React from "react";
import { Table, Tr, Th, Td } from "@/components/Table";

const SkeletonRow = () => (
	<tr className="bg-white hover:bg-gray-200 transition ease-in duration-100 dark:bg-black">
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
				<Tr className="border-black border-2 dark:border-white bg-white dark:bg-black">
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
