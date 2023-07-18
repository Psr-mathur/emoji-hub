import React from "react";
import "./pagei.css";
import { getPaginationRange } from "./usePagination";

const Pagination = (props) => {
	// console.log(props);
	const arr = getPaginationRange(
		props.totalPage,
		props.limit,
		props.currentPage,
		props.siblings
	);
	// console.log(arr);
	return (
		<div className="paginationContainer">
			<ul className="pagination">
				<li
					className="page-item"
					onClick={() => props.onPageChange("&laquo;")}
				>
					<span>&laquo;</span>
				</li>
				<li
					className="page-item"
					onClick={() => props.onPageChange("&lsaquo;")}
				>
					<span>&lsaquo;</span>
				</li>
				{arr.map((val) => {
					if (val === props.currentPage) {
						return (
							<li
								className="page-item active"
								key={val}
								onClick={() => props.onPageChange(val)}
							>
								<span>{val}</span>
							</li>
						);
					} else {
						return (
							<li
								className="page-item"
								key={val}
								onClick={() => props.onPageChange(val)}
							>
								<span>{val}</span>
							</li>
						);
					}
				})}
				<li
					className="page-item"
					onClick={() => props.onPageChange("&rsaquo;")}
				>
					<span>&rsaquo;</span>
				</li>
				<li
					className="page-item"
					onClick={() => props.onPageChange("&raquo;")}
				>
					<span>&raquo;</span>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
