import React from "react";
import { format, parseISO } from "date-fns";
import Box from "./Box";
import { cs } from "date-fns/locale";

const Feedback = ({ author, feedback, createdAt }) => (
	<div className="mt-5">
		<Box>
			<h4>{author}</h4>
			<p className="mb-4 text-xs" mb={4} fontSize="xs">
				{format(parseISO(createdAt), "d. MMM y", { locale: cs })}
			</p>
			<p>{feedback}</p>
		</Box>
	</div>
);

export default Feedback;
