import Head from "next/head";
import { useAuth } from "@/lib/auth";
import Box from "../components/Box";
import Link from "next/link";
export default function Home() {
	const auth = useAuth();
	return (
		<div>
			<Head>
				<title>Website reviews</title>
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
						<div class="flex flex-wrap -mx-2 mb-8">
							<div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
								<div class="border-2 border-black h-12 text-sm text-grey-dark flex items-center justify-center dark:border-white dark:bg-black">
									<p>Krok. 1</p>
								</div>
							</div>
							<div class="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
								<div class="border-2 border-black h-12 text-sm text-grey-dark flex items-center justify-center dark:border-white dark:bg-black">
									<p>Krok. 2</p>
								</div>
							</div>
							<div class="w-full lg:w-1/3 px-2">
								<div class="border-2 border-black h-12 text-sm text-grey-dark flex items-center justify-center dark:border-white dark:bg-black">
									<p>Krok. 3</p>
								</div>
							</div>
							{auth.user ? (
								<Link href={"/dashboard"}>Dashboard</Link>
							) : (
								<button onClick={(e) => auth.signinWithGitHub()}>
									Prihlásit se!
								</button>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
