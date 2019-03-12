import { connect } from 'react-redux';
import EditTodo from './EditTodo';
import {GetTodoById,UpdateTodoById} from '../../redux/actions'
function mapStateToProps(state) {
  console.log(state);
	const { todos } = state
	return { todos }
  }

const mapDispatchToProps = dispatch => ({
    GetTodoById: (todoId) => dispatch(GetTodoById(todoId)),
    UpdateTodoById:(todo,history)=>dispatch(UpdateTodoById(todo,history))

});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);