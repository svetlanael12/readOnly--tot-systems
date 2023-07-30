import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'
import Toolbar from '../../components/toolbar'
import Message from '../../components/message'
import SearchInput from '../../components/search-input'

const FolderPage = observer(() => {
  const { Messages } = useStore()
  const { id } = useParams()

  useEffect(() => {
    sort()
    Messages.removeAllCheckedMsg()
  }, [id])

  function sort() {
    if (id === 'favorite') {
      return Messages.sortFavorite()
    }
    if (id) {
      Messages.sortType(id)
    }
  }

  return (
    <div>
      <SearchInput sort={sort} />
      <Toolbar />
      {
        Messages.sortMessage.length > 0 ?
        Messages.sortMessage.map((msg: any, ind: number) => <Message msg={msg} key={ind + 10} />) :
        <h2>В этой папке пока нет сообщений</h2>
      }
    </div>
  )
})
export default FolderPage