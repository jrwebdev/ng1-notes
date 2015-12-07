import {createStore} from 'redux';
import notesApp from './reducers.ts';

let store = createStore(notesApp);

export default store;