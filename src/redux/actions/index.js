import {constList} from '../../constants/API_URL'
export const CREATE_TODO = '[Todo] CREATE_TODO'; 
export const CREATE_TODO_SUCCESS = '[Todo] CREATE_TODO_SUCCESS'; 
export const CREATE_TODO_ERROR = '[Todo] CREATE_TODO_ERROR'; 

export const GET_TODOS = '[Todo] GET_TODOS' 
export const GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS' 
export const GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR' 


const axios = require('axios');

export function CreateTodo(todo){
    console.log(todo);
    return (dispatch, getState,todo) => {
        return axios({
              url: constList.ApiUrl,
              method: 'POST',
              body:todo,
              headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
            }).then((response) => {
              dispatch(CreateTodoSuccess(response.data))
            }).catch((error)=>{
                  console.log(error);
            })
    }
}

export function CreateTodoSuccess(todo){
    console.log(todo);
    return {
        type:CREATE_TODO_SUCCESS,
        todo
    }
}

export function GetTodos(){
    return (dispactch, getState) => {
        return  axios({
            url: constList.ApiUrl,
            method: 'GET',
            headers: {
              'Accept':'application/json',
              'Content-Type': 'application/json'
          }
          }).then((response) => {
            dispactch(GetTodoSuccess(response.data))
          }).catch((error)=>{
                console.log(error);
          }) 
    }
}

export function GetTodoSuccess(todos){
    return {
        type:GET_TODOS_SUCCESS,
        todos
    }
}
