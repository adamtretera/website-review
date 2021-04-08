import DashboardShell from "@/components/DashboardShell";

import { useAuth } from "@/lib/auth";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";
import SiteTableSkeleton from "@/components/skeletons/SiteTableSkeleton";
import SiteTableHeader from "@/components/SiteTableHeader";
const Dashboard = () => {
	const { user } = useAuth();
	const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);

	if (!data) {
		return (
			<DashboardShell>
				<SiteTableHeader />

				<SiteTableSkeleton />
			</DashboardShell>
		);
	}

	return (
		<DashboardShell>
			<SiteTableHeader />

			{data?.sites ? <SiteTable sites={data.sites} /> : <SiteTableSkeleton />}
		</DashboardShell>
	);
};

export default Dashboard;
