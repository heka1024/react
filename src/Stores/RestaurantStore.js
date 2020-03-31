import { observable, action, computed, runInAction, toJS } from 'mobx'
import Api from '../Api'

class RestaurantStore {
  @observable restaurants = []
  @observable got_res = false

  @observable rests = new Map()
  @observable is_error = false

  constructor(root) {
    this.root = root
  }

  @action getAll = () => {
    Api.getRestaurants().then(
      res => {
        runInAction(() => {
          this.is_error = false
          res.forEach(i => {
            this.rests.set(i.id, i)
          })
        })
        console.log(this.rests)
      },
      err => {
        runInAction(() => {
          this.is_error = true
        })
        console.log(err)
      }
    )
  }
  
  @action update = (id) => {
    Api.getRestaurant(id).then(
      res => {
        if (!this.is_error) {
          runInAction(() => {
            this.rests.set(res.id, res)
          })
        }
      },
      err => {
        runInAction(() => { this.is_error = true})
      }
    )
  }
  
  @computed get array() {
    return [...this.rests].map(([k, v]) => toJS(v))
  }

  @action getRestaurants = () => {
    if (!this.got_res) {
       return Api.getRestaurants().then(this.without_err, this.with_err)
    }
  }
  
  @action forceGetRestaurants = () => {
    return Api.getRestaurants().then(this.without_err, this.with_err)
  }
  
  @action.bound
  without_err(res) {
    this.restaurants = res 
    this.got_res = true
  }

  @action.bound
  with_err(err) {
    this.got_res = false
    console.log(err)
  }
}

export default RestaurantStore