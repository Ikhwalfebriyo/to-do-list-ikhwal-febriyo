export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const START_EDITING = "START_EDITING";
export const SAVE_EDITED_TODO = "SAVE_EDITED_TODO";
export const SET_FILTER = "SET_FILTER";

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: { text },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: { id },
});

export const startEditing = (id) => ({
	type: START_EDITING,
	payload: { id },
});

export const saveEditedTodo = (id, editedText) => {
	return {
		type: SAVE_EDITED_TODO,
		payload: {
			id,
			editedText
		},
	};
};
export const setFilter = (filter) => ({
	type: SET_FILTER,
	payload: { filter },
});