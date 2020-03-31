import { observable, action, computed, runInAction } from 'mobx'
import { date2query, dateChange } from '../DateUtil'
import Api from '../Api'

const time_query = ['b', 'l', 'd']

class MenuStore {
  @observable menus = []
  @observable time = 0
  @observable date = new Date()

  @action 
  timeAdd = () => { this.time = (this.time + 1) % 3 }
  
  @action 
  handleDate = (n) => { 
    this.date = dateChange(this.date, n) 
    this.getMenus()
  }
  
  @action 
  reset = () => { 
    this.menus = []
    this.date = new Date()
    this.time = 0
  }

  @action
  getMenus = () => {
    Api.getMenus(date2query(this.date)).then(
      res => {
        runInAction(() => {
          this.menus = res
        })
      },
      err => { console.log(err) }
    )
  }
  
  @computed
  get queriedMenus() {
    return this.menus.filter(menu => menu.time === time_query[this.time])
  }
  
}

export default MenuStore