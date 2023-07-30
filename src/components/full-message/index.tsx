import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'
import { IMessages } from '../../types'
import CustomButton from '../custom-button'
import DateComponent from '../date'
import trashSvg from '../../assets/svg/trash.svg'
import favoriteSvg from '../../assets/svg/favorite.svg'

import './index.css'

interface IFullMessageProps {
  msg: IMessages
}

const FullMessage: FC<IFullMessageProps> = observer(({msg}) => {
  const {Messages} = useStore()
  const navigate = useNavigate()

  function clickTrash() {
    Messages.changeType(msg.id, 'trash')
    navigate(-1)
  }

  function clickFavorite() {
    Messages.changeFavorite(msg.id, !msg.favorite)
  }

  return (
    <div className='full-message'>
      <p className='full-message__from'>{msg.from}</p>
      <p className='full-message__text'>{msg.message}</p>
      <p className='full-message__date'>
        <DateComponent date={msg.date} />
      </p>
      <div className='full-message__btns'>
        <CustomButton click={clickTrash} svg={trashSvg} />
        <CustomButton click={clickFavorite} svg={favoriteSvg} className={`${msg.favorite ? 'active-favorite' : ''}`}/>
      </div>
    </div>
  )
})
export default FullMessage