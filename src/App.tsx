import { observer } from 'mobx-react-lite';
import React, {useEffect} from 'react';
import { CustomFolder } from './store/customFolderStore';
import AppRouter from './routers';

const App = observer(() =>{
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
})

export default App;
