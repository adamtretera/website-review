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

const FeedbackTableSkeleton = () => {
	return (
		<Table>
			<thead>
				<Tr>
					<Th>Jméno</Th>
					<Th>Feedback</Th>
					<Th>Route</Th>
					<Th>Viditelnost</Th>
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

export default FeedbackTableSkeleton;
