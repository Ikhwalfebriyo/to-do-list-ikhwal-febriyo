import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../redux/actions";

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();
	const [isEditing, setEditing] = useState(false);
	const [newText, setNewText] = useState(todo.text);

	const handleToggle = () => {
		dispatch(toggleTodo(todo.id));
	};

	const handleDelete = () => {
		dispatch(deleteTodo(todo.id));
	};

	const handleEdit = () => {
		setEditing(true);
	};

	const handleSave = () => {
		dispatch(editTodo(todo.id, newText));
		setEditing(false);
	};

	return (
		<li className={todo.completed ? "completed" : ""}>
			{isEditing ? (
				<div>
					<input
						type="text"
						value={newText}
						onChange={(e) => setNewText(e.target.value)}
					/>
					<button onClick={handleSave}>Save</button>
				</div>
			) : (
				<div>
					<span onClick={handleToggle}>{todo.text}</span>
					<button onClick={handleEdit}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
			)}
		</li>
	);
};

export default TodoItem;