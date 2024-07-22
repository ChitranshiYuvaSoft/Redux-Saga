import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchTodoRequest } from './ReduxSaga/Todo/todoAction'

const App = () => {

  // const dispatch = useDispatch();
  // const {allTodos} = useSelector(state => state.todos)

  // console.log(allTodos);


  // useEffect(()=>{
  //   dispatch(fetchTodoRequest());
  // },[dispatch])

  return (
    <>
    <Navbar/>
    <Form/>
    <ListGroup/>
    </>
  )
}

export default App
