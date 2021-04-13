import React from "react";
import { NextSeo } from "next-seo";

const Page = ({ name, path, children }) => {
	const title = `Feedback na web – ${name}`;
	const url = `https://website-review.vercel.app/${path}`;
	console.log(title);

	return (
		<>
			<NextSeo
				title={title}
				canonical={url}
				openGraph={{
					url,
					title,
				}}
			/>
			{children}
		</>
	);
};

export default Page;
