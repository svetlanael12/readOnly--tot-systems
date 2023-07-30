import {FC} from 'react'
import './index.css'

interface ICustomButtonProps {
  click: () => void
  svg: unknown | string
  className?: string
}

const CustomButton: FC<ICustomButtonProps> = ({click, svg, className}) => {
  return (
    <button onClick={click} className={`custom-btn ${className ? className : ''}`}>
      <img src={svg as unknown as string} alt="" width={20}/>
    </button>
  )
}
export default CustomButton