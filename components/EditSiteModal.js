import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { updateSite } from "@/lib/db";
import toast from "react-hot-toast";
import { useAuth } from "@/lib/auth";
import { mutate } from "swr";

const EditSiteModal = () => {
	const initialRef = useRef();
	const [showModal, setShowModal] = useState(false);
	const auth = useAuth();

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm();
	const onUpdateSite = ({ site, url }, e) => {
		const newSite = {
			authorId: auth.user.uid,
			createdAt: new Date().toISOString(),
			site,
			url,
			settings: {
				icons: true,
				timestamp: true,
				ratings: false,
			},
		};

		const { id } = createSite(newSite);

		toast.success("Stránka byla upravena.");
		mutate(
			["/api/sites", auth.user.token],

			async (data) => ({
				sites: [{ id, ...newSite }, ...data.sites],
			}),
			false
		);
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
									<h3 className="text-3xl font-semibold">
										Přidat novu stránku.
									</h3>
								</div>

								<div className="relative p-6 pt-0 flex-auto">
									<p className="my-4 text-lg leading-relaxed">
										Přidejte novou stránku na feedback.
									</p>
									<form onSubmit={handleSubmit(onUpdateSite)}>
										<label className="block p-2">Jméno</label>
										<input
											className="border-2 text-sm  border-black dark:border-white dark:bg-gray-900 w-full py-2 px-4 "
											ref={initialRef}
											placeholder="Moje stránka"
											name="site"
											{...register("site", { required: true })}
										></input>
										{errors.site && <span>Toto pole je povinné.</span>}

										<label className="block p-2">URL adresa</label>
										<input
											className="border-2 text-sm  border-black dark:border-white dark:bg-gray-900 w-full py-2 px-4 "
											ref={initialRef}
											placeholder="https://mojewebovka.com"
											name="url"
											{...register("url", { required: true })}
										></input>
										{errors.url && <span>Toto pole je povinné.</span>}

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
