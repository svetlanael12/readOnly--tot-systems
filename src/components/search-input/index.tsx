import React, {FC, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import './index.css'

interface ISearchInputProps {
  sort: () => void
}

const SearchInput: FC<ISearchInputProps> = ({sort}) => {
  const {Messages} = useStore()
  const [input, setInput] = useState('')
  const {id} = useParams()

  useEffect(() => {
    setInput('')
  }, [id])

  function changeInput(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace') {
      sort()
    }
    Messages.searchMessages(input)
    if(input.length === 0) {
      sort()
    }
  }
  return (
    <input 
      className='custom-input search-input' 
      type='text' 
      value={input} 
      onChange={(e) => setInput(e.target.value)} 
      onKeyUp={(e) => changeInput(e)} 
      placeholder='Начните вводить для поиска...'
    />
  )
}
export default SearchInput