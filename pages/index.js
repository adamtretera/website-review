import Head from "next/head";
import { useAuth } from "@/lib/auth";
import Link from "next/link";
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
								<div className="flex justify-center gap-2  w-full">
									<button
										className="flex bg-white text-black  border-2 border-black dark:border-white dark:bg-black dark:text-white px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										onClick={(e) => auth.signinWithGithub()}
									>
										<span className="mr-2">Prihlásit se</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											className="fill-current "
										>
											<path d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"></path>
										</svg>
									</button>
									<button
										className="flex bg-white text-black  border-2 border-black dark:border-white dark:bg-black dark:text-white px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										onClick={(e) => auth.signinWithGoogle()}
									>
										<span className="mr-2">Prihlásit se</span>
										<svg
											width="18"
											height="20"
											viewBox="0 0 256 262"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
												fill="#4285F4"
											/>
											<path
												d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
												fill="#34A853"
											/>
											<path
												d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
												fill="#FBBC05"
											/>
											<path
												d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
												fill="#EB4335"
											/>
										</svg>
									</button>
								</div>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
