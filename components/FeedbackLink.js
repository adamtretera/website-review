import Link from "next/link";
const FeedbackLink = ({ paths }) => {
	return (
		<div className="center justify-between w-full mb-4 mt-1 ">
			<Link href={`/site/${paths.join("/")}`}>Zanechte feedback →</Link>

			<Link fontSize="xs" color="blackAlpha.500" href="/" target="_blank">
				Vytvořeno pomocí: feedbacknaweb.cz
			</Link>
		</div>
	);
};
export default FeedbackLink;
