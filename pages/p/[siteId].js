import Feedback from "@/components/Feedback";
import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/db";
import { getAllFeedback, getAllSites } from "@/lib/db-admin";

import { useRef, useState } from "react";
import { useRouter } from "next/router";

export async function getStaticPaths() {
	const { sites } = await getAllSites();
	const paths = sites.map((site) => ({
		params: {
			siteId: site.id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

const FeedbackPage = ({ initialFeedback }) => {
	const router = useRouter();
	const [allFeedback, setAllFeedback] = useState(initialFeedback);

	const initialRef = useRef(null);

	const { handleSubmit, register } = useForm();

	const onCreateFeedback = ({ feedback }) => {
		const newFeedback = {
			author: "axd",
		};
		setAllFeedback([newFeedback, ...allFeedback]);

		createFeedback(newFeedback);
	};
	return (
		<>
			<DashboardShell>
				<form onSubmit={handleSubmit(onCreateFeedback)}>
					<label className="block pt-4 pb-2 text-xl">Nějaký ten feedback</label>
					<input
						className="border-2 text-sm bg-white  border-black dark:border-white dark:bg-black w-full py-2 px-4 "
						ref={initialRef}
						placeholder="Tato stránka se mi moc libí, jenom bych uprail..."
						name="feedback"
					></input>

					<div className="flex items-center justify-end pt-6">
						<button
							className=" text-black  
                                                 uppercase text-sm px-6 py-2 focus:outline-none  mb-1 ease-linear transition-all duration-150 border-2 bg-white dark:bg-black border-black dark:border-white dark:text-white"
							type="submit"
						>
							Uložit
						</button>
					</div>
				</form>
			</DashboardShell>
		</>
	);
};
export default FeedbackPage;
