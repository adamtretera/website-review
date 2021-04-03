import React from "react";

const Box = ({ children }) => {
	return (
		<div className="p-8 bg-white border-2 border-black dark:bg-black dark:border-white">
			{children}
		</div>
	);
};

export default Box;
