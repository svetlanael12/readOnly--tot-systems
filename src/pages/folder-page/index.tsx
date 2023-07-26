import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { Messages } from '../../store/messagesStore';

const FolderPage = observer(() => {
  const {id} = useParams()

  useEffect(() => {
    if (id) {
      Messages.sortType(id)
    }
  }, [])

  return (
    <div>
      {
        Messages.sortMessage.map((msg: any) => <span key={msg.id}>{msg.message}</span>) 
      }
      FolderPage
    </div>
  )
})
export default FolderPage