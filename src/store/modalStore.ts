import { makeAutoObservable } from "mobx"

class ModalStores {
  _inputModal = ''
  _error = false

  constructor() {
    makeAutoObservable(this)
  }

  get error() {
    return this._error
  }

  get inputModal() {
    return this._inputModal
  }

  setError(bool: boolean) {
    return this._error = bool
  }

  setInputModal(input: string) {
    return this._inputModal = input
  }
}

export const ModalStore = new ModalStores()