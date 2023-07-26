import { makeAutoObservable } from "mobx"

class CustomFoldersStore {
  _folders: string[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get folders() {
    return this._folders
  }

  addFolder(name: string) {
    this._folders.push(name)
  }

  removeFolder(name: string) {
    this._folders.filter((folder) => folder === name)
  }
}

export const CustomFolder = new CustomFoldersStore()