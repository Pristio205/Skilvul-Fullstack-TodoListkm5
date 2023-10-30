const initialState = {
    todos: [
      { id: 1, title: "Buy Milk", isDone: false },
      { id: 2, title: "Buy Egg", isDone: true },
      { id: 3, title: "Buy T-Shirt", isDone: false },
    ],
  };
  
  export const ADD_TODO = "ADD_TODO";
  export const EDIT_TODO = "EDIT_TODO";
  export const REMOVE_TODO = "REMOVE_TODO";
  export const TOGGLE_TODO = "TOGGLE_TODO";
  
  export function addTodo(newTodo) {
    return {
      type: ADD_TODO,
      payload: newTodo,
    };
  }
  
  export function editTodo(todo) {
    return {
      type: EDIT_TODO,
      payload: todo,
    };
  }
  
  export function removeTodo(id) {
    return {
      type: REMOVE_TODO,
      payload: id,
    };
  }
  
  export function toggleTodo(id) {
    return {
      type: TOGGLE_TODO,
      payload: id,
    };
  }
  
  function todoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
          ),
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
          ),
        };
      default:
        return state;
    }
  }
  
  export default todoReducer;
  