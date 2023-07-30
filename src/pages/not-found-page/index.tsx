import React from 'react'
import { NavLink } from 'react-router-dom'
import { FOLDER_ROUTE } from '../../routers/routers'

export default function NotFoundPage() {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <NavLink to={FOLDER_ROUTE + '/inbox'}>Посмотреть все входящие сообщения</NavLink>
    </div>
  )
}
