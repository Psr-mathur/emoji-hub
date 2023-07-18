import { useQuery } from "@tanstack/react-query";
import { createContext, useMemo, useState } from "react";

export const filterContext = createContext({
	getCategory: "",
	setCategory: () => {},
});

export const DataContext = createContext({
	isLoading: true,
	getData: (cat) => {},
	getGroupList: [],
});

const ContextProvider = ({ children }) => {
	const [category, setCategory] = useState("all");

	const { data, isLoading } = useQuery(["emojis"], async () => {
		const res = await fetch("https://emojihub.yurace.pro/api/all");
		return await res.json();
	});

	const getGroupList = useMemo(() => {
		if (data) {
			let group_list = data.map((val) => val.group);
			return [...new Set(group_list)];
		}
		return [];
	}, [isLoading]);

	const getData = (cat) => {
		// console.log(cat);

		if (data) {
			if (cat === "all") {
				return data;
			}
			return data.filter((val) => {
				return val.group === cat;
			});
		}
		return [];
	};

	return (
		<filterContext.Provider
			value={{
				getCategory: category,
				setCategory: setCategory,
			}}
		>
			<DataContext.Provider
				value={{
					isLoading: isLoading,
					getData: (val) => getData(val),
					getGroupList: getGroupList,
				}}
			>
				{children}
			</DataContext.Provider>
		</filterContext.Provider>
	);
};
export default ContextProvider;
