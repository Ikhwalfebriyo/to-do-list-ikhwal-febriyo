import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo, startEditing, saveEditedTodo }) => {
	return (
		<ul id="todo-list">
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
					startEditing={startEditing}
					saveEditedTodo={saveEditedTodo}
				/>
			))}
		</ul>
	);
};

export default TodoList;