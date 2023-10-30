import {
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TODO,
	START_EDITING,
	SAVE_EDITED_TODO,
	SET_FILTER,
} from "./actions";

const initialState = {
	todos: [],
	filter: "all",
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: Date.now(),
						text: action.payload.text,
						completed: false,
						editing: false,
					},
				],
			};
		case TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload.id),
			};
		case START_EDITING:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? { ...todo, editing: true } : todo
				),
			};
		case SAVE_EDITED_TODO:
			if(!action.payload.editedText) {
				alert("Tidak boleh dikosongkan!");
				return state;
			}

			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, text: action.payload.editedText, editing: false }
						: todo
				),
			};
		case SET_FILTER:
			return {
				...state,
				filter: action.payload.filter,
			};
		default:
			return state;
	}
};

export default reducer;