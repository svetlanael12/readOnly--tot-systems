import React, {FC, ReactNode} from 'react'
import { useStore } from '../../hooks/root-store-context'
import { observer } from 'mobx-react-lite'

import './index.css'

interface IModalProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode;
}

const Modal: FC<IModalProps> = observer(({active, setActive, children}) => {
  const { ModalStore } = useStore()

  function hideModal() {
    setActive(false)
    ModalStore.setInputModal('')
  }
  
  return (
    <div className={`modal__background ${active ? 'active' : ''}`}>
    <div className='modal'>
        <button className='modal__btn-hide' onClick={hideModal}>&#128938;</button>
        <p className={`modal__error ${ModalStore.error ? 'show' : 'hide'}`}>
          Такое название уже существует. Придумайте другое
        </p>
        <input 
          className='custom-input' 
          type="text" 
          placeholder='Введите название' 
          value={ModalStore.inputModal} 
          onChange={(e) => ModalStore.setInputModal(e.target.value)}
        />
        {children}
      </div>
    </div>
  )
})
export default Modal