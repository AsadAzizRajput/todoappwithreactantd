import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import {CreateTodo} from '../../redux/actions'
function mapStateToProps(state) {
	const { todo } = state
	return { todo }
  }

const mapDispatchToProps = dispatch =>  ({
    CreateTodo: (todo,history) => dispatch(CreateTodo(todo,history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
