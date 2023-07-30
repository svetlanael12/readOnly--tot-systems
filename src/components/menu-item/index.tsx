import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { FOLDER_ROUTE } from '../../routers/routers'
import { IMenuItem } from '../../types'
import './index.css'

interface IMenuProps {
  folder: IMenuItem
}

const MenuItem: FC<IMenuProps> = ({folder}) => {
  const {name, svg, type} = folder

  return (
    <NavLink to={FOLDER_ROUTE + '/' + type} className='menu__item'>
      <img src={svg as unknown as string} alt="" width={20}/>
      <p className='menu__text'>{name}</p>
    </NavLink>
  )
}
export default MenuItem