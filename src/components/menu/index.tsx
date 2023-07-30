import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'
import { FOLDER_ROUTE } from '../../routers/routers'
import MenuItem from '../menu-item'
import CustomMenuItem from '../custom-menu-item'
import Modal from '../modal'

import './index.css'

const Menu = observer(() => {
  const { ModalStore, CustomFolder, Theme } = useStore()
  const [activeModal, setActiveModal] = useState(false)
  const navigate = useNavigate()
  
  function clickBtnModal() {
    if (CustomFolder.addFolder(ModalStore.inputModal) === 'уже существует') {
      return ModalStore.setError(true)
    } 
    CustomFolder.addFolder(ModalStore.inputModal)
    navigate(FOLDER_ROUTE + '/' + ModalStore.inputModal)
    ModalStore.setError(false)
    ModalStore.setInputModal('')
    setActiveModal(false)
  }

  function disabledCheck() {
    return ModalStore.inputModal.length === 0 ||
    ModalStore.inputModal.toLocaleLowerCase() === 'Входящие'.toLocaleLowerCase() ||
    ModalStore.inputModal.toLocaleLowerCase() === 'Отправленные'.toLocaleLowerCase() ||
    ModalStore.inputModal.toLocaleLowerCase() === 'Спам'.toLocaleLowerCase() ||
    ModalStore.inputModal.toLocaleLowerCase() === 'Черновики'.toLocaleLowerCase() ||
    ModalStore.inputModal.toLocaleLowerCase() === 'Корзина'.toLocaleLowerCase() ||
    ModalStore.inputModal.toLocaleLowerCase() === 'В избранное'.toLocaleLowerCase()
  }

  return (
    <div className='menu'>
      {
        CustomFolder.defaultFolders.map((folder, ind) => <MenuItem folder={folder} key={ind + 20} />)
      }
      {
        CustomFolder.folders.map((folder, ind) => <CustomMenuItem folder={folder} key={ind} />)
      }
      <button className='menu__btn-new-folder' type='button' onClick={() => setActiveModal(!activeModal)}><span className="material-symbols-outlined">add</span> Новая папка</button>
      <Modal active={activeModal} setActive={setActiveModal}>
        <button 
          className='modal__btn' 
          onClick={clickBtnModal} 
          disabled={disabledCheck()}
        >
          Добавить
        </button>
      </Modal>
      <button className='menu__btn-change-theme' onClick={() => Theme.setTheme(Theme.theme === '' ? 'light-theme' : '')}>Сменить тему</button>
    </div>
  )
})
export default Menu