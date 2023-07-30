import { IMenuItem } from "../types";
import folderSvg from '../assets/svg/folder.svg'
import sentSvg from '../assets/svg/sent.svg'
import draftSvg from '../assets/svg/draft.svg'
import spamSvg from '../assets/svg/dislike.svg'
import trashSvg from '../assets/svg/trash.svg'
import favoriteSvg from '../assets/svg/favorite.svg'

export const folders: IMenuItem[] = [
  {
    type: 'inbox',
    name: 'Входящие',
    svg: folderSvg
  },
  {
    type: 'sent',
    name: 'Отправленные',
    svg: sentSvg
  },
  {
    type: 'drafts',
    name: 'Черновики',
    svg: draftSvg
  },
  {
    type: 'spam',
    name: 'Спам',
    svg: spamSvg
  },
  {
    type: 'trash',
    name: 'Корзина',
    svg: trashSvg
  },
  {
    type: 'favorite',
    name: 'В избранное',
    svg: favoriteSvg
  },
]