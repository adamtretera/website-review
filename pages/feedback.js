import DashboardShell from "@/components/DashboardShell";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import FeedbackTable from "@/components/FeedbackTable";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
import FeedbackTableHeader from "../components/FeedbackTableHeader";
const MyFeedback = () => {
	const { user } = useAuth();
	const { data } = useSWR(user ? ["/api/feedback", user.token] : null, fetcher);
	console.log(data?.feedback);
	if (!data?.feedback) {
		return (
			<DashboardShell>
				<FeedbackTableHeader />

				<SiteTableSkeleton />
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

export default MyFeedback;
