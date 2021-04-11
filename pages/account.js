import { useState } from "react";

import { useAuth } from "@/lib/auth";
import { createCheckoutSession, goToBillingPortal } from "@/lib/db";
import DashboardShell from "@/components/DashboardShell";
import Box from "@/components/Box";

const Account = () => {
	const { user, signout } = useAuth();
	const [isCheckoutLoading, setCheckoutLoading] = useState(false);
	const [isBillingLoading, setBillingLoading] = useState(false);

	return (
		<DashboardShell>
			<Box>
				<button
					className=" bg-white text-black active:bg-pink-600 border-2 border-black dark:border-white dark:bg-black dark:text-white px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="button"
					onClick={() => {
						setCheckoutLoading(true);
						createCheckoutSession(user.uid);
					}}
				>
					{" "}
					{isCheckoutLoading ? (
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="h-5 w-5 mr-3 fill-current"
							>
								<path d="M3.414,13.778L2,15.192l4.949,2.121l2.122,4.95l1.414-1.414l-0.707-3.536l3.313-3.313l3.61,7.704l1.339-1.339l-1.19-10.123 l2.828-2.829c0.781-0.781,0.781-2.047,0-2.828c-0.781-0.781-2.048-0.781-2.828,0l-2.903,2.903L3.824,6.297L2.559,7.563l7.644,3.67 l-3.253,3.253L3.414,13.778z"></path>
							</svg>
							<p>Upgradovat plán na startovač</p>
						</div>
					)}
				</button>
				<button
					className=" bg-white text-black active:bg-pink-600 border-2 border-black dark:border-white dark:bg-black dark:text-white px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					onClick={() => {
						setBillingLoading(true);
						goToBillingPortal();
					}}
				>
					View Billing Portal
				</button>
				<button onClick={() => signout()}>Log Out</button>
			</Box>
		</DashboardShell>
	);
};

export default Account;
