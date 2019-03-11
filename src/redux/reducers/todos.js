//import * as TodoActions from '../actions'
import {
	CREATE_TODO,
	CREATE_TODO_SUCCESS,
    CREATE_TODO_ERROR,
    GET_TODOS,
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR
    
} from '../actions';


const todos = (state = '',action)=>{
    switch (action.type) {
        case CREATE_TODO_SUCCESS: {
            return [
                ...state,
                action.todo
            ];
    }
    case GET_TODOS_SUCCESS: {    
        return action.todos
    }
        default:
            return state
    }
}

export default todos