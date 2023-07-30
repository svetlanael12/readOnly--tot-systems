import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../hooks/root-store-context'
import { IMenuItem } from '../../types'
import { FOLDER_ROUTE } from '../../routers/routers'
import MenuItem from '../menu-item'
import Modal from '../modal'
import folderSvg from '../../assets/svg/folder.svg'

import './index.css'

interface ICustomMenuItem {
  folder: string
}

const CustomMenuItem:FC<ICustomMenuItem> = observer(({folder}) => {
  const { ModalStore, CustomFolder } = useStore()
  const [activeModal, setActiveModal] = useState(false)
  const navigate = useNavigate()

  const folderNew: IMenuItem = {
    type: folder,
    name: folder,
    svg: folderSvg
  }

  function editFolder() {
    setActiveModal(true)
    ModalStore.setInputModal(folder)
  }

  function removeFolder() {
    CustomFolder.removeFolder(folder)
  }

  function clickBtnModal1() {
    if(CustomFolder.changeFolder(folder, ModalStore.inputModal) === 'уже существует') {
      return ModalStore.setError(true)
    }
    navigate(FOLDER_ROUTE + '/' + ModalStore.inputModal)
    ModalStore.setError(false)
    ModalStore.setInputModal('')
    setActiveModal(false)
  }
  
  return (
    <div className='menu__custom-item custom-item'>
      <MenuItem folder={folderNew} />
      <div className='custom-item__btns'>
        <button className='custom-item__btn' onClick={editFolder}>&#128393;</button>
        <button className='custom-item__btn' onClick={removeFolder}>&#128938;</button>
      </div>
      <Modal active={activeModal} setActive={setActiveModal}>
        <button onClick={clickBtnModal1} className='modal__btn' disabled={ModalStore.inputModal.length === 0}>Изменить</button>
      </Modal>
    </div>
  )
})
export default CustomMenuItem