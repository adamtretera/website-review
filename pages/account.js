import { useState } from "react";
import Page from "@/components/Page";

import { useAuth } from "@/lib/auth";
import { goToBillingPortal } from "@/lib/db";
import DashboardShell from "@/components/DashboardShell";
import Box from "@/components/Box";
const SettingsTable = ({ stripeRole, children }) => (
	<div className="mt-5">
		<div className="flex justify-between">
			<h4 className="text-lg">Nastavení</h4>
			<span className="text-lg font-bold">Předplatné: {stripeRole}</span>
		</div>
		<div className="flex p-4 pt-0">{children}</div>
	</div>
);
const FeedbackUsage = () => (
	<section className="grid grid-cols-2 text-left gap-6">
		<div className="w-full col-span-2 sm:col-span-1 p-6 border-2 border-black dark:border-white">
			<h4 className="font-bold text-lg">Feedback</h4>
			<p className="text-lg">∞</p>
			<p className="text-lg ">10,000 limit</p>
		</div>
		<div className="w-full col-span-2 sm:col-span-1 p-6 border-2 border-black dark:border-white">
			<h4 className="font-bold text-lg">Feedback</h4>
			<p className="text-lg">∞</p>
			<p className="text-lg">10,000 limit</p>
		</div>
	</section>
);

const Account = () => {
	const { user, signout } = useAuth();
	const [isCheckoutLoading, setCheckoutLoading] = useState(false);
	const [isBillingLoading, setBillingLoading] = useState(false);

	return (
		<DashboardShell>
			<Box>
				<div className="block m-auto text-center">
					<img
						className="w-32 rounded-full border-2 border-black dark:border-white m-auto"
						src={user ? user.photoUrl : "null"}
					/>
					<h1 className="font-bold text-2xl mt-2">
						{user ? user.name : "None"}
					</h1>
					<h3> {user ? user.email : "None"}</h3>
					<SettingsTable stripeRole={user?.stripeRole} />
					<FeedbackUsage />
					<p className="text-md text-left pt-6">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
						Pellentesque pretium lectus id turpis. Duis risus. Aliquam erat
						volutpat. Nullam feugiat, turpis at pulvinar vulputate, erat libero
						tristique tellus, nec bibendum odio risus sit amet ante.
					</p>
				</div>
			</Box>
			<div className="flex justify-end mt-4">
				<button
					className=" bg-white text-black active:bg-pink-600 border-2 border-black dark:border-white dark:bg-black dark:text-white px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					onClick={() => {
						setBillingLoading(true);
						goToBillingPortal();
					}}
				>
					{isBillingLoading ? (
						<div className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="animate-spin h-5 w-5 mr-3 fill-current"
							>
								<path d="M2 11H7V13H2zM17 11H22V13H17zM11 17H13V22H11zM11 2H13V7H11z"></path>
								<path
									transform="rotate(-45.001 6.697 6.697)"
									d="M5.697 4.197H7.697V9.197H5.697z"
								></path>
								<path
									transform="rotate(134.999 17.303 17.303)"
									d="M16.303 14.803H18.303V19.803H16.303z"
								></path>
								<path
									transform="rotate(45.001 6.697 17.303)"
									d="M5.697 14.803H7.697V19.803H5.697z"
								></path>
								<path
									transform="rotate(-44.992 17.303 6.697)"
									d="M14.803 5.697H19.803V7.697H14.803z"
								></path>
							</svg>
							<p>Načíta se</p>
						</div>
					) : (
						<div className="flex items-center">
							<p>Nastavení platby</p>
						</div>
					)}
				</button>
				<button
					className=" bg-white text-black active:bg-pink-600 border-2 border-black dark:border-white dark:bg-black dark:text-white px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					onClick={() => signout()}
				>
					Odhlásit
				</button>
			</div>
		</DashboardShell>
	);
};
const AccountPage = () => (
	<Page name="Účet" path="/account">
		<Account />
	</Page>
);

export default AccountPage;
