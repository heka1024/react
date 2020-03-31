import { observable, action } from 'mobx'
import Api from '../Api'

class SignupStore {
  @observable username = ''
  @observable password1 = ''
  @observable password2 = ''
  @observable error = false

  constructor(root) {
    this.root = root
  }

  @action setUsername = e => {
    const pnew = e.target.value
    console.log(pnew)
    this.username = pnew
  }
  @action setPassword1 = e => {
    const pnew = e.target.value
    console.log(pnew)
    this.password1 = pnew
  }
  @action setPassword2 = e => {
    const pnew = e.target.value
    console.log(pnew)
    this.password2 = pnew
  }
  @action reset() { 
    this.username = ''
    this.password1 = ''
    this.password2 = ''
    this.error = false
  }
  @action signup = () => {
    return Api.signup(
      this.username, 
      this.password1,
      this.password2
    ).then(res => {
      console.log(res)
      if (res.status !== 201) {
        console.log(res)
        this.error = true
        return new Promise((resolve, reject) => {
          resolve(false)  
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve(true)  
        })
      }
    }).catch(err => {
      return new Promise((resolve, reject) => {
        resolve(false)  
      })
    })
  }
}

export default SignupStore