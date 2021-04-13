import DashboardShell from "@/components/DashboardShell";

import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";
import SiteTableSkeleton from "@/components/skeletons/SiteTableSkeleton";
import EmptyState from "@/components/skeletons/EmptyState";
import UpgradeEmptyState from "@/components/skeletons/EmptyState";

import SiteTableHeader from "@/components/SiteTableHeader";
const Dashboard = () => {
	const { user } = useAuth();
	const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);
	const isPaidAccount = user?.stripeRole !== "free";

	if (!data) {
		return (
			<DashboardShell>
				<SiteTableHeader />
				<SiteTableSkeleton />
			</DashboardShell>
		);
	}
	if (data.sites.length) {
		return (
			<DashboardShell>
				<SiteTableHeader />
				<SiteTable sites={data.sites} />
			</DashboardShell>
		);
	}

	return (
		<DashboardShell>
			<SiteTableHeader isPaidAccount={isPaidAccount} />
			{isPaidAccount ? <EmptyState /> : <UpgradeEmptyState />}
		</DashboardShell>
	);
};
const DashboardPage = () => (
	<Page name="Moje stránky" path="/dashboard">
		<MyFeedback />
	</Page>
);

export default DashboardPage;
