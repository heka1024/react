import { observable, action, runInAction } from 'mobx'
import Api from '../Api'

class CommentStore {
  @observable id = 0
  @observable comments = []

  @action setId = (id) => { this.id = id }
  @action getComments = (id) => {
    this.id = id
    Api.getComments(id).then(
      res => {
        runInAction(() => { this.comments = res.data.results.reverse() })
      },
      err => console.log(err)
    )
  }
}

export default CommentStore