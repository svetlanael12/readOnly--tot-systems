import { makeAutoObservable } from "mobx"

class ThemeStores {
  _theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme') || '') : ''

  constructor() {
    makeAutoObservable(this)
  }

  get theme() {
    return this._theme
  }

  setTheme(theme: string) {
    return this._theme = theme
  }
}

export const Theme = new ThemeStores()