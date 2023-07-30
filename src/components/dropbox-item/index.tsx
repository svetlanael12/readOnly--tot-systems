import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import './index.css'

interface IDropboxItemProps {
  folder: string
  type: string
}

const DropboxItem: FC<IDropboxItemProps> = ({folder, type}) => {
  const { Messages } = useStore()

  const {id} = useParams()
  function clickDropboxItem() {
    Messages.checkedMessages.forEach((msg) => {
      Messages.changeType(msg.id, type)
      id && Messages.sortType(id)
      Messages.removeAllCheckedMsg()
    })
  }

  return (
    <li onClick={clickDropboxItem} className='dropbox__item'>
      {folder}
    </li>
  )
}
export default DropboxItem