import React, { Component } from "react";

class SearchBar extends Component {
	render() {
		
		const { searchTerm, handleChange} = this.props;
		console.log("lkjasfhaslkfhasfi", this.props);
		return (
			<div style={{ margin: "20px", textAlign: "center" }}>
					<input
						value={searchTerm}
						onChange={handleChange}
						style={{ width: "75%" }}
					/>
					<br />
				</div>
		);
	}
}

export default SearchBar;
