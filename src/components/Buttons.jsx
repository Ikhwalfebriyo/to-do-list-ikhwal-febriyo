import React from "react";

const Buttons = ({ filter, setFilter }) => {
	return (
		<div id="filter-todo">
			<div className="btn-group" id="filter-button">
				<button
					className={`btn ${filter === "all" ? "btn-active" : ""}`}
					onClick={() => setFilter("all")}
					id="button-content"
				>
					All
				</button>
				<button
					className={`btn ${filter === "active" ? "btn-active" : ""}`}
					onClick={() => setFilter("active")}
					id="button-content"
				>
					Active
				</button>
				<button
					className={`btn ${filter === "completed" ? "btn-active" : ""}`}
					onClick={() => setFilter("completed")}
					id="button-content"
				>
					Completed
				</button>
			</div>
		</div>
	);
};

export default Buttons;