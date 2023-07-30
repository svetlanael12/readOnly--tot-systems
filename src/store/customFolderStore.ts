import { makeAutoObservable } from "mobx"
import { folders } from '../constants/folders'

class CustomFoldersStore {
  _foldersDefault = folders
  _folders: string[] = localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders') || '') : []

  constructor() {
    makeAutoObservable(this)
  }

  get defaultFolders() {
    return this._foldersDefault
  }

  get folders() {
    return this._folders
  }

  addFolder(name: string) {
    const nameFolder = this._folders.find(fold => fold === name)
    if (nameFolder) {
      return 'уже существует'
    }
    this._folders.push(name)
  }

  changeFolder(name: string, newName: string) {
    const nameFolder = this._folders.find(fold => fold === newName)
    if (nameFolder) {
      return 'уже существует'
    }
    const index = this._folders.indexOf(name)
    if (index !== -1) {
      return this._folders[index] = newName
    }
    return 'не найдено'
  }

  removeFolder(name: string) {
    this._folders = this._folders.filter((folder) => folder !== name)
  }
}

export const CustomFolder = new CustomFoldersStore()