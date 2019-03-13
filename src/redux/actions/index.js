import {Const} from '../../constants/Const.js'
export const CREATE_TODO = '[Todo] CREATE_TODO'; 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS'; 
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR'; 

export const GET_TODOS = '[Todo] GET_TODOS' 
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR' 

export const GET_TODOBYID_SUCCESS = '[Todo] GET_TODOBYID_SUCCESS'

export const DELETE_TODO_SUCCESS = '[Todo] DELETE_TODO_SUCCESS'; 

export const UPDATE_TODOBYID_SUCCESS = '[Todo] UPDATE_TODOBYID_SUCCESS'


const axios = require('axios');

export const CreateTodo = (todo,history) => (dispatch) => {
    axios({
        method: 'POST',
        url: Const.ApiUrl,
        data:JSON.stringify(todo),
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
      }
      })
      .then((response) => {

        dispatch({ type: CREATE_TODO_SUCCESS,todo:response.data});
        history.push('/');
      }).catch((error)=>{
            console.log(error);
      })
}
export const DeleteTodo = (todoId,history) => (dispatch) => {
  console.log(todoId);
  axios({
      method: 'DELETE',
      url: Const.ApiUrl+todoId,
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
    }
    })
    .then((response) => {
      dispatch({ type: DELETE_TODO_SUCCESS});
     history.push('/');
     window.location.reload();
      console.log(Window)
    }).catch((error)=>{
          console.log(error);
    })
}




export const GetTodos = () => (dispatch) => {
  axios({
    url: Const.ApiUrl,
    method: 'GET',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
  }
  }).then((response) => {
    let resData = response.data
    dispatch({ type: GET_TODOS_SUCCESS,resData});
  }).catch((error)=>{
        console.log(error);
  }) 
}


export const GetTodoById =(todoId)=>(dispatch)=>{
  axios({
    url: Const.ApiUrl+todoId,
    method: 'GET',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
  }
  }).then((res) => {
    let todoById = res.data;
    dispatch({type:GET_TODOBYID_SUCCESS,todoById:todoById})
  }).catch((error)=>{
        console.log(error);
  }) 
}

export const UpdateTodoById =(todo,history)=>(dispatch)=>{
  axios({
    method: 'PATCH',
    url: Const.ApiUrl+todo.id,
    data:JSON.stringify(todo),
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
  }
  }).then((res) => {
    let todoData = res.data;
    dispatch({type:UPDATE_TODOBYID_SUCCESS,updatedTodo:todoData})
    history.replace('/');
  }).catch((error)=>{
        console.log(error);
  }) 
}