import { makeAutoObservable } from "mobx"
import { messages } from "../constants/messages"
import { IMessages } from "../types"

class MessagesStore {
  _messages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages') || '') : messages
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

  get checkedMessages() {
    const checkedMsg: IMessages[] = []
    this._messages.forEach((msg: IMessages) => {
      if (msg.checked) {
        checkedMsg.push(msg)
      }
    })
    return checkedMsg
  }

  addCheckedMsg(id: number) {
    const message = this._messages.find((msg: IMessages) => msg.id === id)
    if (message) {
      return message.checked = true
    }
  }

  removeCheckedMsg(id: number) {
    const message = this._messages.find((msg: IMessages) => msg.id === id)
    if (message) {
      return message.checked = false
    }
  }

  deleteCheckedMsg(id: number) {
    this._messages = this._messages.filter((msg: IMessages) => id !== msg.id)
  }

  addAllCheckedMsg(type: string) {
    this._messages.forEach((msg: IMessages) => {
      if (msg.type === type || type === 'favorite') {
        msg.checked = true
      }
    })
  }

  removeAllCheckedMsg() {
    this._messages.forEach((msg: IMessages) => {
      msg.checked = false
    })
  }

  oneMessage(id: number) {
    return this._messages.find((msg: IMessages) => msg.id === id)
  }

  sortType(type: string) {
    this._sortMessage = this._messages.filter((msg: IMessages) => msg.type === type)
  }

  sortFavorite() {
    this._sortMessage = this._messages.filter((msg: IMessages) => msg.favorite)
  }

  changeType(id: number, type: string) {
    const message = this._messages.find((msg: IMessages) => msg.id === id)
    
    if (message) {
      return message.type = type
    }
    return false
  }
  
  changeFavorite(id: number, favorite: boolean) {
    const message = this._messages.find((msg: IMessages) => msg.id === id)
    if (message) {
      return message.favorite = favorite
    }
    return false
  }

  changeViewed(id: number, viewed: boolean) {
    const message = this._messages.find((msg: IMessages) => msg.id === id)
    if (message) {
      return message.viewed = viewed
    }
    return false
  }

  searchMessages(value: string) {
    this._sortMessage = this._sortMessage.filter((msg) => msg.message.toLocaleLowerCase().includes(value.toLocaleLowerCase()) || msg.from.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  }
}

export const Messages = new MessagesStore()