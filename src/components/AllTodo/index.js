import { connect } from 'react-redux';
import AllTodo from './AllTodo';
import {GetTodos} from '../../redux/actions'
function mapStateToProps(state) {
	const { todos } = state
	return { todos }
  }

const mapDispatchToProps = dispatch => ({
	 GetTodos: () => dispatch(GetTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllTodo);