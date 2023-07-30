import {FC, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'
import { IMenuItem } from '../../types'
import DropBox from '../dropbox'
import './index.css'

interface IToolbarItemProps {
  item: IMenuItem
}

const ToolbarItem: FC<IToolbarItemProps> = observer(({item}) => {
  const { Messages } = useStore()
  const {id} = useParams()
  const [type, setType] = useState('')
  const [activeDropbox, setActiveDropbox] = useState(false)

  useEffect(() => {
    setType(item.type)
  }, [])

  function clickItem() {
    if (type === 'checked') {
      return Messages.addAllCheckedMsg(id || '')
    }
    if (type === 'trash' || type === 'spam') {
      Messages.checkedMessages.forEach((msg) => {
        Messages.changeType(msg.id, type)
      })
      if (id) {
        Messages.sortType(id)
      }
    }
    if (type === 'read') {
      Messages.checkedMessages.forEach((msg) => {
        Messages.changeViewed(msg.id, true)
      })
    }
    if (type === 'in-folder') {
      return setActiveDropbox(!activeDropbox)
    }
    Messages.removeAllCheckedMsg()
  }

  return (
    <div onClick={clickItem} className='toolbar__item'>
      <img src={item.svg as unknown as string} width={20}/>
      <p>{item.name}</p>
      {
        type === 'in-folder' && 
        <DropBox active={activeDropbox} />
      }
    </div>
  )
})
export default ToolbarItem