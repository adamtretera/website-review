import React from "react";
import Box from "./Box";

export const Th = (props) => (
	<th
		className="bg-white p-4 border-b-2 border-black font-normal dark:bg-black dark:border-white"
		{...props}
	/>
);

export const Td = (props) => (
	<td
		className="bg-white h-12 p-3 border-2 border-black dark:border-white dark:bg-black"
		{...props}
	/>
);

export const Tr = (props) => (
	<tr className="border-b-2 border-black" {...props} />
);

export const Table = (props) => {
	return <table className="text-left bg-white ml-0 mr-0 w-full " {...props} />;
};
