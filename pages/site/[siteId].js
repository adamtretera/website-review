import { useRef, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/db";
import { getAllFeedback, getAllSites, getSite } from "@/lib/db-admin";
import Feedback from "@/components/Feedback";
import DashboardShell from "@/components/DashboardShell";
import SiteHeader from "@/components/SiteHeader";
import { useForm } from "react-hook-form";
import LoginButtons from "@/components/LoginButtons";

export async function getStaticProps(context) {
	const siteId = context.params.siteId;
	const { feedback } = await getAllFeedback(siteId);
	const { site } = await getSite(siteId);

	return {
		props: {
			initialFeedback: feedback,
			site,
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
		fallback: true,
	};
}

const FeedbackPage = ({ initialFeedback, site }) => {
	const { user, loading } = useAuth();
	const router = useRouter();
	const [allFeedback, setAllFeedback] = useState(initialFeedback);

	const initialRef = useRef(null);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onCreateFeedback = ({ feedback }) => {
		const newFeedback = {
			author: user.name,
			authorId: user.uid,
			provider: user.provider,
			siteId: router.query.siteId,
			createdAt: new Date().toISOString(),
			feedback: feedback,
			status: "active",
		};
		createFeedback(newFeedback);
		setAllFeedback([newFeedback, ...allFeedback]);
	};

	const LoginOrLeaveFeedback = () =>
		user ? (
			<button
				type="submit"
				className="bg-white text-black active:bg-pink-600 border-2 border-black dark:border-white dark:bg-black dark:text-white px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
			>
				Zanechat feedback
			</button>
		) : (
			<LoginButtons />
		);

	return (
		<DashboardShell>
			<SiteHeader siteName={site?.site} />

			{allFeedback &&
				allFeedback.map((feedback) => (
					<Feedback key={feedback.id} {...feedback} />
				))}
			<form onSubmit={handleSubmit(onCreateFeedback)}>
				<label className="block pt-4 pb-2 text-xl">Nějaký ten feedback</label>
				<input
					className="border-2 text-sm bg-white  border-black dark:border-white dark:bg-black w-full py-2 px-4 "
					ref={initialRef}
					disabled={router.isFallback}
					placeholder="Tato stránka se mi moc libí, jenom bych uprail..."
					name="feedback"
					{...register("feedback", { required: true })}
				></input>
				{errors.site && (
					<span>Jestli chceš dát feedback, toto pole je povinné.</span>
				)}

				<div className="flex items-center justify-end pt-6">
					{!loading && <LoginOrLeaveFeedback />}
				</div>
			</form>
		</DashboardShell>
	);
};

export default FeedbackPage;
