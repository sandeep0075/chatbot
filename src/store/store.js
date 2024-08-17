import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers'; // Import your root reducer

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for Redux DevTools
);

export default store;
