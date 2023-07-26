import React from 'react'
import { NavLink } from 'react-router-dom'
import { FOLDER_ROUTE } from '../../routers/routers'

export default function HomePage() {
  return (
    <div>
      HomePage
      <NavLink to={FOLDER_ROUTE + '/inbox'}>Посмотреть все входящие сообщения</NavLink>
    </div>
  )
}
