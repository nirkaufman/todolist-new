import {createStore, combineReducers} from 'redux';
import {listReducer} from '../reducers/list.reducer'
import {uiReducer} from '../reducers/ui.reducer'

const initialState = {
  items: [],
  loading: false,
};

const rootReducer = combineReducers({
  items: listReducer,
  loading: uiReducer,
})

export const store = createStore(rootReducer, initialState);