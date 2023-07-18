import React, { useContext, useState } from "react";
import "./main.css";
import Content from "./content";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../pagination/pagination";
import { DataContext, filterContext } from "../context/contextProvider";

const Main = () => {
	const { isLoading, getData } = useContext(DataContext);
	const { getCategory } = useContext(filterContext);
	// console.log(getData(getCategory));
	// console.log(getGroupList);

	const data = getData(getCategory);

	let limit = 50;
	const [currentPage, setCurrentPage] = useState(1);
	let totalLength = data ? data.length : 0;
	let totalPage = Math.ceil(totalLength / limit);
	// console.log(totalPage);
	// console.log(data[0]);
	const handlePageChange = (val) => {
		switch (val) {
			case "&laquo;":
				setCurrentPage(1);
				break;
			case "&lsaquo;":
				if (currentPage != 1) setCurrentPage((p) => p - 1);
				break;
			case "&rsaquo;":
				if (currentPage != totalPage) setCurrentPage((p) => p + 1);
				break;
			case "&raquo;":
				setCurrentPage(totalPage);
				break;
			default:
				if (val !== "...") {
					setCurrentPage(parseInt(val));
				}
				break;
		}
	};

	return (
		<div className="maindiv" id="maindiv">
			{isLoading ? (
				<div className="contentConatainer">
					<h4>Loading...</h4>
				</div>
			) : (
				<Content
					data={data.slice(
						(currentPage - 1) * limit,
						currentPage * limit
					)}
				/>
			)}
			<Pagination
				totalPage={totalPage}
				limit={limit}
				currentPage={currentPage}
				siblings={1}
				onPageChange={handlePageChange}
			/>
		</div>
	);
};

export default Main;
