import Head from "next/head";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import { getAllFeedback, getSite } from "@/lib/db-admin";
import Feedback from "@/components/Feedback";
import FeedbackLink from "@/components/FeedbackLink";
import LoginButtons from "@/components/LoginButtons";

const SITE_ID = "HGNekZLqqg7HNnWcdKqT";
export async function getStaticProps(context) {
	const { feedback } = await getAllFeedback(SITE_ID);
	const { site } = await getSite(SITE_ID);

	return {
		props: {
			allFeedback: feedback,
			site,
		},
		revalidate: 1,
	};
}
export default function Home({ allFeedback, site }) {
	const auth = useAuth();
	return (
		<div>
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              if (document.cookie && document.cookie.includes('weback-web-feedback-auth')) {
                window.location.href = "/dashboard"
              }
            `,
					}}
				/>
			</Head>
			<main
				style={{ minHeight: "calc(100vh - 5rem)" }}
				className="grid place-items-center bg-gray-200 dark:bg-gray-900 "
			>
				<div>
					<h1 className="text-4xl p-6">
						Získeje rychlý feedback na vaše stránky.
					</h1>
					<div className="container m-auto w-full">
						<div className="flex flex-wrap -mx-2 mb-8">
							{auth.user ? (
								<Link href={"/dashboard"}>Dashboard</Link>
							) : (
								<LoginButtons />
							)}
						</div>
						<FeedbackLink paths={[SITE_ID]} />
						{allFeedback.map((feedback, index) => (
							<Feedback
								key={feedback.id}
								settings={site?.settings}
								isLast={index === allFeedback.length - 1}
								{...feedback}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
