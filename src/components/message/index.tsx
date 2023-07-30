import React, { FC, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'
import { MESSAGE_ROUTE } from '../../routers/routers'
import CustomButton from '../custom-button'
import { IMessages } from '../../types'
import DateComponent from '../date'
import favoriteSvg from '../../assets/svg/favorite.svg'
import readSvg from '../../assets/svg/read.svg'
import trashSvg from '../../assets/svg/trash.svg'
import './index.css'

interface IMessageProps {
  msg: IMessages;
}

const Message: FC<IMessageProps> = observer(({msg}) => {
  const { Messages } = useStore()
  const {id} = useParams()
  const [check, setCheck] = useState(false)

  function checkMessage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      return Messages.addCheckedMsg(msg.id)
    }
    return Messages.removeCheckedMsg(msg.id)
  }

  function changeFavorite() {
    Messages.changeFavorite(msg.id, !msg.favorite)
    if (id && id === 'favorite') {
      Messages.sortFavorite()
    }
  }

  function changeViewed() {
    Messages.changeViewed(msg.id, !msg.viewed)
  }

  function removeMsg() {
    if (id === 'trash') {
      Messages.deleteCheckedMsg(msg.id)
    } else {
      Messages.changeType(msg.id, 'trash')
    }
    if (id) {
      Messages.sortType(id)
    }
  }

  useEffect(() => {
    if (Messages.checkedMessages.find((elem) => elem.id === msg.id)) {
      setCheck(true)
    } else {
      setCheck(false)
    }
    
  }, [Messages.checkedMessages])

  return (
    <div className='message'>
      <div className='message__container'>
        <label className='custom-ckeckbox'>
          <input type="checkbox" checked={check} onChange={(e) => checkMessage(e)} className='visually-hidden'/>
          <span className='checkmark'>&#10003;</span>
        </label>
        <NavLink to={MESSAGE_ROUTE + '/' + msg.id} className='message__text-container'>
          <p className='message__from'>{msg.from}</p>
          <p className='message__text'>{msg.message.slice(0,50)}...</p>
          <p className='message__date'>
            <DateComponent date={msg.date} />
          </p>
        </NavLink>
      </div>
      <div className='message__btns'>
        {
          msg.viewed ?
          <p>Прочитано</p> :
          <p>Не прочитано</p>
        }
        <CustomButton click={changeViewed} svg={readSvg} />
        <CustomButton click={changeFavorite} svg={favoriteSvg} className={`${msg.favorite ? 'active-favorite' : ''}`} />
        <CustomButton click={removeMsg} svg={trashSvg} />
      </div>
    </div>
  )
})
export default Message