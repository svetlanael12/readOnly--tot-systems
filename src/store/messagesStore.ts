import { makeAutoObservable } from "mobx"
import { messages } from "../constants/messages"

class MessagesStore {
  _messages = messages
  _sortMessage = messages

  constructor() {
    makeAutoObservable(this)
  }

  get message() {
    return this._messages
  }

  get sortMessage() {
    return this._sortMessage
  }

  sortType(type: string) {
    this._sortMessage = this._messages.filter((msg) => msg.type === type)
  }

  changeType(id: number, type: string) {
    const message = this._messages.find(msg => msg.id === id)
    if (message) {
      return message.type = type
    }
    return false
  }
  
  changeFavorite(id: number, favorite: boolean) {
    const message = this._messages.find(msg => msg.id === id)
    if (message) {
      return message.favorite = favorite
    }
    return false
  }

  changeViewed(id: number, viewed: boolean) {
    const message = this._messages.find(msg => msg.id === id)
    if (message) {
      return message.viewed = viewed
    }
    return false
  }
}

export const Messages = new MessagesStore()