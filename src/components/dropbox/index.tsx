import { FC } from 'react'
import { useStore } from '../../hooks/root-store-context'
import DropboxItem from '../dropbox-item'
import { folders } from '../../constants/folders'
import './index.css'

interface IDropboxProps {
  active: boolean
}

const DropBox: FC<IDropboxProps> = ({active}) => {
  const { CustomFolder } = useStore()
  
  return (
    <ul className={`dropbox ${active ? 'show' : 'hide'}`}>
      {
        folders.map((item, ind) => item.type !== 'favorite' && <DropboxItem key={ind} folder={item.name} type={item.type}/>)
      }
      {
        CustomFolder.folders.map((folder, ind) => <DropboxItem key={ind} folder={folder} type={folder}/>)
      }
    </ul>
  )
}
export default DropBox