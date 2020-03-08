import AuthStore from './AuthStore'
import SignupStore from './SignupStore'

class RootStore {
  constructor() {
    this.AuthStore = new AuthStore(this)    
    this.SignupStore = new SignupStore(this)    

  }
}

export default RootStore