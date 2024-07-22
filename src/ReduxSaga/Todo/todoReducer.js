import {
  ADD_TODOS_FAILURE,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  DELETE_TODOS_FAILURE,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_SUCCESS,
  EDIT_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  UPDATE_TODOS_FAILURE,
  UPDATE_TODOS_REQUEST,
  UPDATE_TODOS_SUCCESS,
} from "./todoAction";

const initialState = {
  allTodos: [],
  loading: false,
  error: null,
  edit : {todo : {}, isEdit : false}
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    // Get Todos
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTodos: action.payload,
      };

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Add Todos
    case ADD_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTodos: [...state.allTodos, action.payload],
        error: null,
      };
    case ADD_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


      // Delete Todos
    case DELETE_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case DELETE_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        // todos : state.todos.filter(item => item._id !== _id),
        error: null,
      };
    case DELETE_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };


      // EDIT
      case EDIT_TODOS_SUCCESS:
        return {
          ...state,
          loading : false,
          edit : {todo : action.payload, isEdit : true},
          error : null
        }

         // Update Todos
         case UPDATE_TODOS_REQUEST: 
         return {
           ...state,
           loading : true,
           error : null
         }
 
         case UPDATE_TODOS_SUCCESS:
           return {
             ...state,
             allTodos : state.allTodos.map(item => item._id === action.payload._id ? action.payload : item),
             edit : {todo : {}, isEdit : false},
           }
 
         case UPDATE_TODOS_FAILURE:
           return {
             ...state,
             loading : false,
             error : action.payload
           }

    default:
      return state;
  }
};

export default todoReducer;
