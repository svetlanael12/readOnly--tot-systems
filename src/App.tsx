import React from 'react';
import { useBeforeUnload } from 'react-router-dom';
import { useStore } from './hooks/root-store-context';
import { observer } from 'mobx-react-lite';
import AppRouter from './routers';

const App = observer(() =>{
  const {Messages, CustomFolder, Theme} = useStore()

  useBeforeUnload(() => {
    localStorage.setItem('folders', JSON.stringify(CustomFolder.folders))
    localStorage.setItem('messages', JSON.stringify(Messages._messages))
    localStorage.setItem('theme', JSON.stringify(Theme.theme))
  });

  return (
    <div className={`body ${Theme.theme}`}>
      <div className="App">
        <AppRouter />
      </div>
    </div>
  );
})

export default App;
