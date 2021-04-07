import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/cake-container';
import HooksCakeContainer from './components/hooks-cake-container';
import IceCreamContainer from './components/iceCream-container';
import NewCakeContainer from './components/new-cake-container';
import ItemContainer from './components/item-container';
import UserContainer from './components/user-container';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
