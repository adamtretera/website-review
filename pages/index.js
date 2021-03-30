import Head from "next/head";
import { useAuth } from "../lib/auth";

export default function Home() {
	const auth = useAuth();
	return (
		<div>
			<Head>
				<title>Website reviews</title>
			</Head>

			<main className="display-gird items-center">Content</main>

			<footer></footer>
		</div>
	);
}
