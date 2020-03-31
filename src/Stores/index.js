import AuthStore from './AuthStore'
import SignupStore from './SignupStore'
import MenuStore from './MenuStore'
import RestaurantStore from './RestaurantStore'
import CommentStore from './CommentStore'

class RootStore {
  constructor() {
    this.AuthStore = new AuthStore(this)    
    this.SignupStore = new SignupStore(this)    
    this.RestaurantStore = new RestaurantStore(this)    
    this.MenuStore = new MenuStore(this)    
    this.CommentStore = new CommentStore(this)    
  }
}

export default RootStore