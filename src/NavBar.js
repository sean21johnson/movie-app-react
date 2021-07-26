import React from "react";

function NavBar({ onSearch }) {
	return (
		<section className="navigation_bar">
			<form className="submit" onSubmit={onSearch}>
				<div className="search_area">
					<input className="input_search" name="search" placeholder="Search"></input>
					<label name="search"></label>
				</div>
			</form>
		</section>
	);
}

export default NavBar;
