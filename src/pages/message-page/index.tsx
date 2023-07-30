import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'
import FullMessage from '../../components/full-message'

const MessagePage = observer(() => {
  const { Messages } = useStore()
  const { id } = useParams()
  const msg = id && Messages.oneMessage(Number(id))

  useEffect(() => {
    if (msg) {
      Messages.changeViewed(msg.id, true)
    }
  }, [])

  return (
    <div>
      {
        msg ?
        <FullMessage msg={msg} /> :
        <p>loading...</p>
      }
    </div>
  )
})
export default MessagePage