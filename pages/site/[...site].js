import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/lib/auth";
import { createFeedback } from "@/lib/db";
import Feedback from "@/components/Feedback";
import DashboardShell from "@/components/DashboardShell";
import SiteHeader from "@/components/SiteHeader";
import { useForm } from "react-hook-form";
import LoginButtons from "@/components/LoginButtons";
import useSWR, { mutate } from "swr";
import fetcher from "@/utils/fetcher";

const FeedbackPage = () => {
	const { user, loading } = useAuth();
	const router = useRouter();
	const siteAndRoute = router.query?.site;
	const siteId = siteAndRoute ? siteAndRoute[0] : null;
	const route = siteAndRoute ? siteAndRoute[1] : null;
	const feedbackApi = route
		? `/api/feedback/${siteId}/${route}`
		: `/api/feedback/${siteId}`;

	const { data: siteData } = useSWR(`/api/site/${siteId}`, fetcher);
	const { data: feedbackData } = useSWR(feedbackApi, fetcher);
	const site = siteData?.site;
	const allFeedback = feedbackData?.feedback;
	const initialRef = useRef(null);
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();
	const onCreateFeedback = ({ feedback }) => {
		const newFeedback = {
			siteId,
			siteAuthorId: site.authorId,
			route: route || "/",
			author: user.name,
			authorId: user.uid,
			feedback: feedback,
			createdAt: new Date().toISOString(),
			provider: user.provider,
			status: "pending",
		};
		createFeedback(newFeedback);
		mutate(
			feedbackApi,
			async (data) => ({
				feedback: [newFeedback, ...data.feedback],
			}),
			false
		);
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
			<SiteHeader
				isSiteOwner={site?.authorId === user?.uid}
				site={site}
				siteId={siteId}
				route={route}
			/>

			{allFeedback &&
				allFeedback.map((feedback, index) => (
					<Feedback key={feedback.id} settings={site?.settings} {...feedback} />
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
