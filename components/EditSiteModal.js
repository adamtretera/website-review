import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { updateSite } from "@/lib/db";
import toast from "react-hot-toast";
import { mutate } from "swr";
import { Switch } from "@headlessui/react";

const EditSiteModal = ({ settings, siteId, children }) => {
	const initialRef = useRef();
	const [showModal, setShowModal] = useState(false);
	const [enabledTimeStamp, setEnabledTimeStamp] = useState(settings?.timestamp);
	const [enabledIcons, setEnabledIcons] = useState(settings?.icons);
	const [enabledRatings, setEnabledRatings] = useState(settings?.ratings);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();
	const onUpdateSite = async () => {
		console.log(enabledTimeStamp, enabledRatings, enabledIcons);
		//await updateSite(siteId, {
		//	settings: enabledTimeStamp,
		//});
		toast.success("Stránka byla upravena.");
		mutate(`/api/site/${siteId}`);
		reset();

		setShowModal(false);
	};
	return (
		<>
			<button
				className=" bg-white text-black active:bg-pink-600 border-2 border-black dark:border-white dark:bg-black dark:text-white px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => setShowModal(true)}
			>
				Upravit stránku
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
									<h3 className="text-3xl font-semibold">Změnit stránku.</h3>
								</div>

								<div className="relative p-6 pt-0 flex-auto">
									<form onSubmit={handleSubmit(onUpdateSite)}>
										<Switch.Group as="div" className="flex gap-10 py-4">
											<Switch.Label passive>Povolit čas</Switch.Label>
											<Switch
												checked={enabledTimeStamp}
												onChange={setEnabledTimeStamp}
												name="timestamp"
												className={`${
													enabledTimeStamp
														? "dark:bg-gray-900 bg-gray-200"
														: "bg-gray-900 "
												} relative inline-flex items-center h-6 border-2 dark:border-white border-black rounded-lg   w-12`}
											>
												<span className="sr-only">Enable notifications</span>
												<span
													className={`${
														enabledTimeStamp
															? "translate-x-6 border-black bg-white   "
															: "translate-x-1  bg-gray-900 border-white"
													} inline-block w-4 h-4 transform border-2 dark:bg-white rounded-full `}
												/>
											</Switch>
											<Switch.Label passive>Povolit ikonky</Switch.Label>

											<Switch
												checked={enabledIcons}
												onChange={setEnabledIcons}
												name="icons"
												className={`${
													enabledIcons ? "bg-blue-600" : "bg-gray-200"
												} relative inline-flex items-center h-6 rounded-full w-11`}
											>
												<span className="sr-only">Enable notifications</span>
												<span
													className={`${
														enabledIcons ? "translate-x-6" : "translate-x-1"
													} inline-block w-4 h-4 transform bg-white rounded-full`}
												/>
											</Switch>
											<Switch.Label passive>Povolit hodnocení</Switch.Label>

											<Switch
												checked={enabledRatings}
												onChange={setEnabledRatings}
												name="timestamp"
												className={`${
													enabledRatings ? "bg-blue-600" : "bg-gray-200"
												} relative inline-flex items-center h-6 rounded-full w-11`}
											>
												<span className="sr-only">Enable notifications</span>
												<span
													className={`${
														enabledRatings ? "translate-x-6" : "translate-x-1"
													} inline-block w-4 h-4 transform bg-white rounded-full`}
												/>
											</Switch>
										</Switch.Group>

										<div className="flex items-center justify-end p-6">
											<button
												className="text-black   background-transparent  uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150 border-2 border-black dark:border-white dark:text-white"
												type="button"
												onClick={() => setShowModal(false)}
											>
												Zavřít
											</button>
											<button
												className=" text-black  
                                                 uppercase text-sm px-6 py-2 focus:outline-none   mr-4 mb-1 ease-linear transition-all duration-150 border-2 border-black dark:border-white dark:text-white"
												type="submit"
											>
												Uložit
											</button>
										</div>
									</form>
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

export default EditSiteModal;
