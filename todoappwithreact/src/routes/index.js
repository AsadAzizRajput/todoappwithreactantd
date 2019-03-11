import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';



const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={AllTodo} />
			<Route exact path="/addtodo" component={AddTodo} />	
            </Switch>
	</Router>
);

export default Routers;