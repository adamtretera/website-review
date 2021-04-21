import React from "react";
import { Table, Tr, Th, Td } from "./Table";
import FeedbackRow from "./FeedbackRow";
import DeleteFeedbackButton from "./DeleteFeedbackButton";

const FeedbackTable = ({ allFeedback }) => {
	return (
		<Table>
			<thead>
				<Tr className="border-black border-2 dark:border-white bg-white dark:bg-black">
					<Th>Jméno</Th>
					<Th>Feedback</Th>
					<Th>Route</Th>
					<Th>Viditelnost</Th>
					<Th>{""}</Th>
				</Tr>
			</thead>

			<tbody>
				{allFeedback.map((feedback) => (
					<FeedbackRow key={feedback.id} {...feedback} />
				))}
			</tbody>
		</Table>
	);
};

export default FeedbackTable;
