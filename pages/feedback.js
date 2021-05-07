import DashboardShell from "@/components/DashboardShell";
import Page from "@/components/Page";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/skeletons/EmptyState";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import FeedbackTable from "@/components/FeedbackTable";
import FeedbackSkeleton from "@/components/skeletons/FeedbackSkeleton";
import FeedbackTableHeader from "@/components/FeedbackTableHeader";
const AllFeedback = () => {
	const { user } = useAuth();
	const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher);

	if (!data?.feedback) {
		return (
			<DashboardShell>
				<FeedbackTableHeader />

				<FeedbackSkeleton />
			</DashboardShell>
		);
	}

	return (
		<DashboardShell>
			<FeedbackTableHeader />

			{data?.feedback ? (
				<FeedbackTable allFeedback={data.feedback} />
			) : (
				<EmptyState />
			)}
		</DashboardShell>
	);
};

const AllFeedbackPage = () => (
	<Page name="Můj feedback" path="/feedback">
		<AllFeedback />
	</Page>
);

export default AllFeedbackPage;
