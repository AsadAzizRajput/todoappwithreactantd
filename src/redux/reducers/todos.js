//import * as TodoActions from '../actions'
import {
	CREATE_TODO,
	CREATE_TODO_SUCCESS,
    CREATE_TODO_ERROR,
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    DELETE_TODO_SUCCESS,
    GET_TODOBYID_SUCCESS,
    UPDATE_TODOBYID_SUCCESS
    
} from '../actions';


const todos = (state = '',action)=>{
    console.log(action);
    switch (action.type) {
        case CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
    }
    case GET_TODOS_SUCCESS: {   
        return action.resData
        
    }
    case DELETE_TODO_SUCCESS: {    
        return [
            ...state
        ];
        
    }
    case GET_TODOBYID_SUCCESS:{
        return action.todoById
        
    }

    case UPDATE_TODOBYID_SUCCESS:{
        return action.updatedTodo
        
    }
    
        default:
            return state
    }
}

export default todos