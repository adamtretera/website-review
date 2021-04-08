import React from "react";

const ToggleSwitch = () => {
	return (
		<div class="flex justify-between items-center" onClick={""}>
			<h2>Toggle me</h2>
			<div className="w-16 h-10 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out">
				<div class="bg-white w-8 h-8 rounded-full shadow-md transform duration-300 ease-in-out"></div>
			</div>
		</div>
	);
};

export default ToggleSwitch;
