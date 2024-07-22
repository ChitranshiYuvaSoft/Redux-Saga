import React, { useEffect, useState } from 'react'
import { addTodoRequest, updateTodoRequest } from '../ReduxSaga/Todo/todoAction';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {


  const {edit} = useSelector(state => state.todos);

  // console.log(edit, "from");

  const [formData, setFormData] = useState({
    title : "",
    description : ""
  });

  const dispatch = useDispatch();

  // console.log(formData)

  const {title, description} = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit Data");
    if(edit.isEdit){
      dispatch(
        updateTodoRequest({
          _id : edit.todo._id,
          title,
          description
        })
      )
    }else{
      dispatch(
        addTodoRequest(formData)
      );
    }
    setFormData({
      title : "",
      description : ""
    });
    // console.log("Done")
  }


  useEffect(()=>{
    if (edit && edit.todo) {
      setFormData({
        title : edit.todo.title,
        description : edit.todo.description
      })
  }},[edit])



  return (
    <div className='w-100 d-flex align-items-center justify-content-center formSec'>
      <form action="" className='w-50 d-flex align-items-center justify-content-around flex-column form'
      onSubmit={handleSubmit}>
        <input type="text" class="form-control py-3"  placeholder='Enter Title Here'
        name='title'
        value={title}
        onChange={handleChange}/>
        <textarea rows={"4"} cols={"10"} placeholder='Enter Description Here' className='form-control'
        name='description'
        value={description}
        onChange={handleChange }></textarea>
        <button className='bg-dark text-light fw-semibold form-control py-3'>Save</button>
      </form>
    </div>
  )
}

export default Form;
