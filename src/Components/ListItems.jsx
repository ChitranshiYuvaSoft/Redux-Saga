import React from "react";
// import { deleteTodoRequest } from "../ReduxSaga/Todo/todoAction";
// import { connect, useDispatch } from "react-redux";

const ListItems = ({item , handleDelete, handleEdit}) => {


  // const dispatch = useDispatch();

  // const handleDelete = (_id) => {
  //   console.log(_id, "deleteTodos");
  //   dispatch(deleteTodoRequest(_id))
  //   console.log("delettttertey")
  // }

  return (
    <li className="list-group-item my-1 w-100 ">
      <span className="w-100 d-flex align-items-center justify-content-around">
        <div className="w-50">
          <h3>Tilte : {item.title}</h3>
          <h5>Description : {item.description}</h5>
        </div>
        <div className="w-50 d-flex align-items-center justify-content-end">
          <button className="bg-warning text-light p-2 border-0" onClick={() => handleEdit(item)}>Edit</button>
          <button className="bg-danger text-light p-2  border-0" onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      </span>
    </li>
  );
};


// const mapDispatchToProps = (dispatch) => ({
//   deleteTodo : (_id) => dispatch(deleteTodoRequest(_id))
// })

// export default connect(mapDispatchToProps)(ListItems);


export default ListItems;