import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { 
  MenuView, 
  LoginView, 
  SignUpView, 
  DetailView, 
  RestaurantsView,
  AccountView
} from './pages'

@inject(root => ({
  RestaurantStore: root.RestaurantStore,
  MenuStore: root.MenuStore
}))

@observer
class App extends Component {
  componentDidMount() {
    const { MenuStore, RestaurantStore } = this.props
    MenuStore.getMenus()
    RestaurantStore.getRestaurants()
    RestaurantStore.getAll()

  }
  
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
