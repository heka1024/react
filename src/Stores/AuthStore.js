import React from 'react'
import { observable, action } from 'mobx'
import Api from '../Api'

class AuthStore {
  @observable logged_in = false
  @observable username = ''
  @observable password = ''
  @observable error = false

  constructor(root) {
    this.root = root
  }

  @action setState = (username, password) => {
     this.username = username
     this.password = password
  }

  @action setUsername = e => {
    const pnew = e.target.value
    console.log(pnew)
    this.username = pnew
  }
  @action setPassword = e => {
    const pnew = e.target.value
    console.log(pnew)
    this.password = pnew
  }
  @action reset() { 
    this.username = ''
    this.password = ''
    this.error = false
  }
  @action login = () => {
    return Api.login(this.username, this.password)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.logged_in = !this.logged_in
          return new Promise((resolve, reject) => {
            resolve(true)  
          })
        } else {
          console.log(res)
          this.error = true
          return new Promise((resolve, reject) => {
            resolve(false)  
          })
        }
      }).catch(err => {
        return new Promise((resolve, reject) => {
          resolve(false)  
        })
      })
  }
  @action logout = () => {
    return Api.logout()
      .then(res => {
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
      }).catch(err => {
        console.log(err)
        return new Promise((resolve, reject) => {
          resolve(false)  
        })
      })
  }
}

export default AuthStore