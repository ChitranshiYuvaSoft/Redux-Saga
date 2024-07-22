export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
export const ADD_TODOS_FAILURE = "ADD_TODOS_FAILURE";

export const DELETE_TODOS_REQUEST = "DELETE_TODOS_REQUEST";
export const DELETE_TODOS_SUCCESS = "DELETE_TODOS_SUCCESS";
export const DELETE_TODOS_FAILURE = "DELETE_TODOS_FAILURE";

// export const EDIT_TODOS_REQUEST = "EDIT_TODOS_REQUEST";
export const EDIT_TODOS_SUCCESS = "EDIT_TODOS_SUCCESS";
// export const EDIT_TODOS_FAILURE = "EDIT_TODOS_FAILURE";

export const UPDATE_TODOS_REQUEST = "UPDATE_TODOS_REQUEST";
export const UPDATE_TODOS_SUCCESS = "UPDATE_TODOS_SUCCESS";
export const UPDATE_TODOS_FAILURE = "UPDATE_TODOS_FAILURE";


// Get Todos

export const fetchTodoRequest = () => ({type : FETCH_TODOS_REQUEST});
export const fetchTodoSuccess = (todos) => ({type : FETCH_TODOS_SUCCESS, payload : todos});
export const fetchTodoFailure = (error) => ({type : FETCH_TODOS_FAILURE, payload : error});


// Add Todos

export const addTodoRequest = (todo) => ({type : ADD_TODOS_REQUEST, payload : todo});
export const addTodoSuccess = (todo) => ({type : ADD_TODOS_SUCCESS, payload : todo});
export const addTodoFailure = (error) => ({type : ADD_TODOS_FAILURE, payload : error});

// Delete Todo

export const deleteTodoRequest = (_id) => ({type : DELETE_TODOS_REQUEST, payload : _id});
export const deleteTodoSuccess = (_id) => ({type : DELETE_TODOS_SUCCESS, payload : _id});
export const deleteTodoFailure = (error) => ({type : DELETE_TODOS_FAILURE, payload : error});


// Edit Todo

// export const editTodoRequest = () => ({type : EDIT_TODOS_REQUEST});
export const editTodoSuccess = (todo) => ({type : EDIT_TODOS_SUCCESS, payload : todo});
// export const editTodoFailure = (error) => ({type : EDIT_TODOS_FAILURE, payload : error});


// Update Todos

export const updateTodoRequest = (todo) => ({type : UPDATE_TODOS_REQUEST, payload : todo});
export const updateTodoSuccess = (todo) => ({type : UPDATE_TODOS_SUCCESS, payload : todo});
export const updateTodoFailure = (error) => ({type : UPDATE_TODOS_FAILURE, payload : error});