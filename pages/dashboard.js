import Head from "next/head";
import DashboardShell from "@/components/DashboardShell";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
const Dashboard = () => {
	const { user } = useAuth();
	const { data } = useSWR(user ? ["/api/sites", user.token] : null, fetcher);

	if (!data) {
		<DashboardShell>
			<SiteTableSkeleton />
		</DashboardShell>;
	}

	return (
		<DashboardShell>
			{data?.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
		</DashboardShell>
	);
};

export default Dashboard;
