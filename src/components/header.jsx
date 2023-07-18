import React, { useContext, useState } from "react";
import "./header.css";
import { DataContext, filterContext } from "../context/contextProvider";

const Header = () => {
	const { getCategory, setCategory } = useContext(filterContext);
	const { getGroupList: group_list } = useContext(DataContext);

	return (
		<nav className="navbar">
			<div className="navbar-container container">
				<input type="checkbox" name="" id="" />
				<div className="hamburger-lines">
					<span className="line line1"></span>
					<span className="line line2"></span>
					<span className="line line3"></span>
				</div>
				<ul className="menu-items">
					<li>
						<a href="#maindiv">Home</a>
					</li>
					<li>
						<select
							name="catog"
							id="catog"
							value={getCategory}
							onChange={(e) => setCategory(e.target.value)}
						>
							<option value="Category" hidden>
								Category
							</option>
							<option value="all">all</option>
							{group_list.map((val, index) => {
								return (
									<option value={val} key={index}>
										{val}
									</option>
								);
							})}
						</select>
					</li>
					<li>
						<a href="#">Menu</a>
					</li>
					<li>
						<a href="#footer">About</a>
					</li>
				</ul>
				<h1 className="logo">Emo&Co.</h1>
			</div>
		</nav>
	);
};

export default Header;
