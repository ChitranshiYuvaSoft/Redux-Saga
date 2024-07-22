import axios from "axios";

const API_URL = "https://listtimes.onrender.com/api/todo";

// export const fetchTodosAPI = () => axios.get(API_URL);


export const fetchTodosAPI = async() => {
  const response = await axios.get(API_URL);
  // console.log(response.data);
  return response.data;
}

// Add Data
export const addTodoAPI = async(formData) => {
  // console.log(formData, "service")
  const response = await axios.post(API_URL + '/', formData);
  // console.log(response.data);
  return response.data;
}


// Delete Data
export const deleteTodoAPI = async(_id) => {
  // console.log(_id, "fromService");
  const response = await axios.delete(API_URL + '/' + _id);
  // console.log(response.data);
  return response.data;
}


// Update Data
export const updateTodoAPI = async(todo) => {
  // console.log(todo, "updateTodoservice");
  const response = await axios.put(API_URL + '/' + todo. _id , {title : todo.title, description : todo.description});
  // console.log(response.data);
  return response.data;
}