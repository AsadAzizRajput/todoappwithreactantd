import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import AddTodo from '../components/AddTodo'
import AllTodo from '../components/AllTodo';
import EditTodo from '../components/EditTodo';



const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={AllTodo} />	
			<Route exact path="/addtodo" component={AddTodo} />
			<Route exact path="/edittodo/:id" component={EditTodo} />

        </Switch>
	</Router>
);

export default Routers;