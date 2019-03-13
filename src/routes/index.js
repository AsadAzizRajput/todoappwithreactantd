import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

import AddTodo from '../components/AddTodo'
import AllTodo from '../components/AllTodo';
import EditTodo from '../components/EditTodo';
import Login 	from './../scenes/Login';



const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Login} />	
			<Route  path="/alltodo" component={AllTodo} />	
			<Route  path="/addtodo" component={AddTodo} />
			<Route  path="/edittodo/:id" component={EditTodo} />

        </Switch>
	</Router>
);

export default Routers;