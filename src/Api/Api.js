import axios from 'axios'

const base = 'http://rest-api.run.goorm.io'

const Api = {
  getMenus: (date = '') => {
    const url = `${base}/menus/`
    return axios.get(url)
      .then(res => new Promise((resolve, reject) => {
          resolve(res.data.results)  
        })
      ).catch(err => new Promise((resolve, reject) => {
          resolve(err)  
        })
      )
  },
  getRestaurants: () => {
    const url = `${base}/restaurants/`
    return axios.get(url)
      .then(res => new Promise((resolve, reject) => {
          resolve(res.data.results)  
        })
      ).catch(err => new Promise((resolve, reject) => {
          resolve(err)  
        })
      )
  },
  signup: (username, password1, password2) => {
    const url = `${base}/rest-auth/registration/`
    const body = {
      username: username,
      password1: password1,
      password2: password2
    }
    return axios.post(url, body)
     .then(res => new Promise((resolve, reject) => {
          resolve(res)  
        })
      ).catch(err => new Promise((resolve, reject) => {
          resolve(err)  
        })
      )
  },
  logout: () => {
    const url = `${base}/rest-auth/logout/`
    return axios.post(url)
  },
  login: (username, password) => {
    const url = `${base}/rest-auth/login/`
    const body = {
      username: username,
      password: password
    }
    return axios.post(url, body)
      .then(res => new Promise((resolve, reject) => {
          resolve(res)  
        })
      ).catch(err => new Promise((resolve, reject) => {
          resolve(err)  
        })
      )
  }
}

export default Api