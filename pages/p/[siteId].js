import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { getAllFeedback, getAllSites } from "@/lib/db-admin";
import Feedback from "@/components/Feedback";
import DashboardShell from "@/components/DashboardShell";
import { createFeedback } from "@/lib/db";
import { useAuth } from "@/lib/auth";

export async function getStaticProps(context) {
	const siteId = context.params.siteId;
	const { feedback } = await getAllFeedback(siteId);

	return {
		props: {
			initialFeedback: feedback,
		},
		revalidate: 1,
	};
}
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
	const auth = useAuth();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onCreateFeedback = ({ feedback }) => {
		const newFeedback = {
			author: auth.user.name,
			authorId: auth.user.uid,
			provider: auth.user.provider,
			siteId: router.query.siteId,
			createdAt: new Date().toISOString(),
			feedback: feedback,
			status: "čeká",
		};
		setAllFeedback([newFeedback, ...allFeedback]);

		createFeedback(newFeedback);
	};
	return (
		<>
			<DashboardShell>
				{allFeedback.map((feedback) => (
					<Feedback key={feedback.id} {...feedback} />
				))}
				<form onSubmit={handleSubmit(onCreateFeedback)}>
					<label className="block pt-4 pb-2 text-xl">Nějaký ten feedback</label>
					<input
						className="border-2 text-sm bg-white  border-black dark:border-white dark:bg-black w-full py-2 px-4 "
						ref={initialRef}
						placeholder="Tato stránka se mi moc libí, jenom bych uprail..."
						name="feedback"
						{...register("feedback", { required: true })}
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
