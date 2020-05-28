import { createStore } from 'redux';
import userReducer from './user/userReducer';


const store = createStore(userReducer);
store.subscribe(() => console.log(store.getState()));

export default store;
