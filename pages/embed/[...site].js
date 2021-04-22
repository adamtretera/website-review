import { useRef, useState } from "react";
import { useRouter } from "next/router";
import "iframe-resizer/js/iframeResizer.contentWindow";
import { getAllFeedback, getAllSites, getSite } from "@/lib/db-admin";
import Feedback from "@/components/Feedback";
import FeedbackLink from "@/components/FeedbackLink";

export async function getStaticProps(context) {
	const [siteId, route] = context.params.site;
	const { feedback } = await getAllFeedback(siteId, route);
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
			site: [site.id.toString()],
		},
	}));

	return {
		paths,
		fallback: true,
	};
}
const EmbeddedFeedbackPage = ({ initialFeedback, site }) => {
	const router = useRouter();

	return (
		<div>
			<FeedbackLink paths={router.query.site} />
			{initialFeedback?.length ? (
				initialFeedback.map((feedback, index) => (
					<Feedback
						key={feedback.id}
						settings={site?.settings}
						isLast={index === initialFeedback.length - 1}
						{...feedback}
					/>
				))
			) : (
				<div>Nejsou tu žadné feedbaky na tuto stránku.</div>
			)}
		</div>
	);
};

export default EmbeddedFeedbackPage;
