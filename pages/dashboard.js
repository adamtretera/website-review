import Head from "next/head";
import DashboardShell from "@/components/DashboardShell";
import { mutate } from "swr";

import { useAuth } from "@/lib/auth";
import EmptyState from "@/components/EmptyState";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import SiteTable from "@/components/SiteTable";
import SiteTableSkeleton from "@/components/SiteTableSkeleton";
const Dashboard = () => {
	const { data } = useSWR("/api/sites", fetcher);

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
