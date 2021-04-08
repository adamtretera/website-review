import React, { useState, useRef } from "react";
import { mutate } from "swr";

import { deleteFeedback } from "@/lib/db";
import { useAuth } from "@/lib/auth";
import toast from "react-hot-toast";

const DeleteFeedbackButton = ({ feedbackId }) => {
	const [showModal, setShowModal] = useState(false);
	const cancelRef = useRef();
	const auth = useAuth();

	const onClose = () => setShowModal(false);
	const onDelete = () => {
		deleteFeedback(feedbackId);
		toast.error("Feedback byl smazán");

		mutate(
			["/api/feedback", auth.user.token],
			async (data) => {
				return {
					feedback: data.feedback.filter(
						(feedback) => feedback.id !== feedbackId
					),
				};
			},
			false
		);
		onClose();
	};
	return (
		<>
			<button
				className="flex bg-white text-black  border-2 border-black dark:border-white dark:bg-black dark:text-white px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Odstranit
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						fill="none"
						d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
					></path>
					<path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path>
					<path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path>
				</svg>
			</button>

			{showModal ? (
				<>
					<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-2 border-black dark:border-white dark:bg-black">
								<div
									style={{ minWidth: "40vw" }}
									className="flex items-start justify-between p-5 pb-2"
								>
									<h3 className="text-3xl font-semibold ">
										Opravdu chcete odstranit feedback ?
									</h3>
								</div>

								<div className="relative p-6  flex-auto">
									<button
										className=" bg-white text-black  border-2 border-black dark:border-white dark:bg-black dark:text-white px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										ref={cancelRef}
										onClick={onClose}
									>
										Zrušit
									</button>
									<button
										className=" bg-white text-black  border-2 border-black dark:border-white dark:bg-black dark:text-white px-3 py-1 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										onClick={onDelete}
									>
										Odstranit
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-30 fixed inset-0 z-30 bg-black"></div>
				</>
			) : null}
		</>
	);
};
export default DeleteFeedbackButton;
