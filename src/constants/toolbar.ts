import { IMenuItem } from "../types";
import trashSvg from '../assets/svg/trash.svg'
import crossSvg from '../assets/svg/cross.svg'
import checkSvg from '../assets/svg/checkmark.svg'
import folderArrowSvg from '../assets/svg/folder-arrow.svg'
import spamSvg from '../assets/svg/dislike.svg'
import readSvg from '../assets/svg/read.svg'

export const toolbar: IMenuItem[] = [
  {
    type: 'non-checked',
    name: 'Снять выделение',
    svg: crossSvg
  },
  {
    type: 'checked',
    name: 'Выделить все',
    svg: checkSvg
  },
  {
    type: 'trash',
    name: 'Корзина',
    svg: trashSvg
  },
  {
    type: 'in-folder',
    name: 'В папку...',
    svg: folderArrowSvg
  },
  {
    type: 'spam',
    name: 'Спам',
    svg: spamSvg
  },
  {
    type: 'read',
    name: 'Пометить прочитанным',
    svg: readSvg
  },
]