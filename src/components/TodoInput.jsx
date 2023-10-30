import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim() !== "") {
			addTodo(text);
			setText("");
		}
	};

	return (
		<form onSubmit={handleSubmit} id="form-todo">
			<div className="form-control" id="control-todo">
				<input
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="What to do"
					className="input input-bordered input-md"
					id="input-todo"
				/>
				<button
					type="submit"
					className="btn btn-primary"
					id="button-todo"
				>
					Add
				</button>
			</div>
		</form>
	);
};

export default TodoInput;