import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Website reviews</title>
			</Head>

			<main className={styles.main}>
				<h1>Adam je borec</h1>
			</main>

			<footer></footer>
		</div>
	);
}
