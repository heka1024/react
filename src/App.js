import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { 
  MenuView, 
  LoginView, 
  SignUpView, 
  DetailView, 
  RestaurantsView,
  AccountView
} from './pages'

class App extends Component {
	render() {
		return (
			<div>
					<Route exact path="/" component={ MenuView }/>
					<Route path="/login" component={ LoginView }/>
					<Route path="/signup" component={ SignUpView }/>
          <Route path="/account" component={ AccountView }/>
					<Route path="/restaurants" component={ RestaurantsView }/>
					<Route path="/restaurant/:id" component={ DetailView }/>
			</div>
		);
	}
}

export default App;
