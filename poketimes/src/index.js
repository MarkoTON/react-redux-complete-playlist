import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Recucer is like store in Vuex. There is logic for some store 
import rootReducer from './reducers/rootReducer'
// Vraca store, i ovde ga nazivamo store i onda ga unutar provider-a isto nazivamo store
const store = createStore(rootReducer);
// Here we are providing store to whole app
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
