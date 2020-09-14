import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Store from './store/store';
import './App.css';
import TablesContainer from './components/tablesContainer';

const store = createStore(Store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <TablesContainer />
    </Provider>
  );
}

export default App;
