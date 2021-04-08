import React, { useState } from "react";
import { Table, Tr, Th, Td } from "./Table";
import Switch from "react-switch";
import DeleteFeedbackButton from "./DeleteFeedbackButton";
import ToggleSwitch from "./ToggleSwitch";

const FeedbackTable = ({ allFeedback }) => {
	return (
		<Table>
			<thead>
				<Tr className="border-black border-2 dark:border-white bg-white dark:bg-black">
					<Th>Name</Th>
					<Th>Feedback</Th>
					<Th>Route</Th>
					<Th>Viditelnost</Th>
					<Th>{""}</Th>
				</Tr>
			</thead>
			<tbody>
				{allFeedback.map((feedback) => (
					<tr
						className="bg-white hover:bg-gray-200 transition ease-in duration-100 dark:bg-black"
						key={feedback.id}
					>
						<Td>{feedback.name}</Td>
						<Td>{feedback.feedback}</Td>
						<Td>{feedback.route || "/"}</Td>
						<Td>{"toggle"}</Td>
						<Td>
							<DeleteFeedbackButton feedbackId={feedback.id} />
						</Td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default FeedbackTable;
