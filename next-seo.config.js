const title = "Feedback na web – Nejednduší cesta, jak získat rychle feedback.";
const description =
	"Feedback na web je aplikace vytvořena Adamem Treterou jako JAM stack";

const SEO = {
	title,
	description,
	canonical: "https://website-review.vercel.app/",
	openGraph: {
		type: "website",
		locale: "cs-CZ",
		url: "https://website-review.vercel.app/",
		title,
		description,
		images: [
			{
				url: "https://website-review.vercel.app/",
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
};

export default SEO;
