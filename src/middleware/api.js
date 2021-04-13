import {toggleLoading} from '../actions/ui.actions';
import {setItems} from '../actions/list.actions';
 
export const api = (store) => (next) => (action) => {
 if(action.type === 'LOAD_ITEMS') {
   store.dispatch(toggleLoading(true));

   fetch('https://jsonplaceholder.typicode.com/todos')
    .then( results => results.json())
    .then( items => {
      store.dispatch(setItems(items));
      store.dispatch(toggleLoading(false));
    })
 } else {
   next(action);
 }
}