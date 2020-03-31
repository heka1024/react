import axios from 'axios'

const base = 'http://rest-api.run.goorm.io'

const Api = {
  like: (res_id, token) => {
    const url = `${base}/like/${res_id}/`
    console.log(url)
    return axios({
      url: url,
      method: "post",
      headers: {'Authorization': `Token ${token}`}
    }).then(
      res => new Promise((resolve, reject) => { resolve(res) }),
      err => new Promise((resolve, reject) => { resolve(err) })
    )
  },
  deleteComment: (comment_id, token) => {
    const url = `${base}/comment_delete/${comment_id}/`
    return axios({
      url: url,
      method: "post",
      headers: {'Authorization': `Token ${token}`}
    }).then(
      res => new Promise((resolve, reject) => { resolve(res) }),
      err => new Promise((resolve, reject) => { resolve(err) })
    )
  },
  postComment: (res_id, text, token) => {
    const url = `${base}/comment_new/${res_id}/`
    return axios({
      url: url,
      method: "post",
      headers: {'Authorization': `Token ${token}`},
      data: {
        text: text
      }
    }).then(
      res => new Promise((resolve, reject) => { resolve(res) }),
      err => new Promise((resolve, reject) => { resolve(err) })
    )
  },
  getComments: (id = 15) => {
    const url = `${base}/comments/?id=${id}`
    return axios.get(url)
  },
  getMenus: (date = '') => {
    const url = date === '' ?
          `${base}/menus/` : `${base}/menus/?date=${date}`

    return axios.get(url)
      .then(res => new Promise((resolve, reject) => {
          resolve(res.data.results)  
        })
      ).catch(err => new Promise((resolve, reject) => {
          resolve(err)  
        })
      )
  },
  getRestaurant: (id) => {
    const url = `${base}/restaurants/${id}/`
    return axios.get(url).then(
      res => new Promise((resolve, reject) => { resolve(res.data) }),
      err => new Promise((resolve, reject) => { resolve(err) })
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