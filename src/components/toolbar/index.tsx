import { observer } from 'mobx-react-lite'
import { useStore } from '../../hooks/root-store-context'
import { toolbar } from '../../constants/toolbar'
import ToolbarItem from '../toolbar-item'
import './index.css'

const Toolbar = observer(() => {
  const { Messages } = useStore()
  
  return (
    <div className='toolbar'>
      {
        Messages.checkedMessages.length > 0 &&
        toolbar.map((elem, ind) => <ToolbarItem item={elem} key={ind} />)
      }
    </div>
  )
})
export default Toolbar