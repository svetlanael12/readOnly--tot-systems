import { CustomFolder } from "./customFolderStore"
import { Messages } from "./messagesStore"
import { ModalStore } from "./modalStore"
import {Theme} from './themeStore'


export class RootStore {
  Messages = Messages
  CustomFolder = CustomFolder
  ModalStore = ModalStore
  Theme = Theme
}