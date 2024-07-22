import React, { useEffect } from "react";
import ListItems from "./ListItems";
import { connect } from "react-redux";
import { deleteTodoRequest, editTodoSuccess, fetchTodoRequest, fetchTodoSuccess } from "../ReduxSaga/Todo/todoAction";

const ListGroup = ({ todos, error, loading, getData, deleteData, editData }) => {


  useEffect(() => {
    getData;
  }, []);

  if (!todos || todos.length === 0) {
    return (
      <div className="w-100 d-flex align-items-center justify-content-center ListSec">
        <h2>No Todos Yet!!</h2>
      </div>
    );
  }

  const handleDelete = (_id) => {
    //  console.log(_id, "deleteTodos");
    //  dispatch(deleteTodoRequest(_id));
    deleteData(_id)
  }

  const handleEdit = (todo) => {
    // console.log(todo, "editTodo");
    editData(todo)
  }

  // console.log(todos, error, loading);

  return (
    <div className="w-100 d-flex align-items-center justify-content-center ListSec">
      <ul className="w-50 d-flex align-items-center justify-content-around flex-column list-group ListUl overflow-y-scroll">
        {todos.map((item) => (
          <ListItems key={item._id} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.allTodos,
  error: state.todos.error,
  loading: state.todos.loading,
});

const mapDispatchToProper = (dispatch) => ({
  getData: dispatch(fetchTodoRequest()),
  deleteData : (_id) => dispatch(deleteTodoRequest(_id)),
  editData : (todo) => dispatch(editTodoSuccess(todo))
});

export default connect(mapStateToProps, mapDispatchToProper)(ListGroup);
