import { observable, action } from 'mobx'
import Api from '../Api'

class AuthStore {
  @observable logged_in = false
  @observable username = ''
  @observable password = ''
  @observable error = false
  @observable token = ''

  constructor(root) {
    this.root = root
  }

  @action logout = () => {
    this.username = ''
    this.password = ''
    this.token = false
    this.error = false
    this.logged_in = false
  }

  @action setState = (username, password) => {
     this.username = username
     this.password = password
  }

  @action setUsername = e => {  this.username = e.target.value }
  @action setPassword = e => { this.password = e.target.value }
  
  @action pageOut = () => {
    this.password = ''
    this.error = false
  }
  
  @action reset() { 
    this.username = ''
    this.password = ''
    this.error = false
  }

  @action login = () => {
    return Api.login(this.username, this.password)
      .then(this.login_without_err, this.with_err)
  }
  
  @action.bound
  login_without_err(res) {
    if (res.status === 200) {
      this.token = res.data.key
      this.logged_in = !this.logged_in
      const ret = new Promise((resolve, reject) => {
        resolve(true)  
      })
      console.log(ret)
      return ret
    } else {
      console.log(res.status)
      this.error = true
      return new Promise((resolve, reject) => {
        resolve(false)  
      })
    }
  }

  @action.bound
  with_err(err) {
    console.log(err)
    return new Promise((resolve, reject) => {
      resolve(false)  
    })
  }
  
  @action logout = () => {
    return Api.logout()
      .then(this.logout_without_err, this.with_err)
  }
  
  @action.bound
  logout_without_err(res) {
    if (res.status === 200) {
      this.logged_in = !this.logged_in
      this.reset()
      return new Promise((resolve, reject) => {
        resolve(true)  
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(false)  
      })
    }
  }
}

export default AuthStore