import { connect } from 'react-redux';
import AllTodo from './AllTodo';
import {GetTodos,DeleteTodo} from '../../redux/actions'
function mapStateToProps(state) {
	const { todos } = state
	return { todos }
  }

const mapDispatchToProps = dispatch => ({
	 GetTodos: () => dispatch(GetTodos()),
	 DeleteTodo:(todoId,history)=>dispatch(DeleteTodo(todoId,history))
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTodo);