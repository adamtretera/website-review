import Head from "next/head";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
import LoginButtons from "@/components/LoginButtons";

export default function Home() {
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
							<div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
								<div className="border-2 bg-white border-black  text-sm text-grey-dark  p-4  text-center dark:border-white dark:bg-black">
									<h3 className="text-2xl">Krok. 1</h3>
									<p>Zvěřejni svojí stránku</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="100"
										height="100"
										viewBox="0 0 24 24"
										className="fill-current  w-full"
									>
										<path d="M20,3H4C2.897,3,2,3.897,2,5v11c0,1.103,0.897,2,2,2h7v2H8v2h3h2h3v-2h-3v-2h7c1.103,0,2-0.897,2-2V5 C22,3.897,21.103,3,20,3z M4,14V5h16l0.002,9H4z"></path>
									</svg>
								</div>
							</div>
							<div className=" md:w-1/2 lg:w-1/3 px-2 mb-4">
								<div className=" border-2 p-4 bg-white border-black text-sm text-grey-dark  text-center dark:border-white dark:bg-black">
									<h3 className="text-2xl">Krok. 2</h3>
									<p>Pošli odkaz svým kamarádům</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="100"
										height="100"
										viewBox="0 0 24 24"
										className="fill-current  w-full"
									>
										<path d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"></path>
										<path d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"></path>
									</svg>
								</div>
							</div>
							<div className="w-full lg:w-1/3 px-2">
								<div className="border-2 bg-white border-black  text-sm text-grey-dark p-4  text-center dark:border-white dark:bg-black">
									<p className="text-2xl">Krok. 3</p>
									<p>Čekej na feedback</p>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="100"
										height="100"
										viewBox="0 0 24 24"
										className="fill-current  w-full"
									>
										<path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
										<circle cx="8.5" cy="10.5" r="1.5"></circle>
										<circle cx="15.493" cy="10.493" r="1.493"></circle>
										<path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"></path>
									</svg>
								</div>
							</div>
							{auth.user ? (
								<Link href={"/dashboard"}>Dashboard</Link>
							) : (
								<LoginButtons />
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
