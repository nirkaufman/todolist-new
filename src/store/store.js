import {createStore, combineReducers, applyMiddleware} from 'redux';
import {listReducer} from '../reducers/list.reducer'
import {uiReducer} from '../reducers/ui.reducer';
import {logger} from '../middleware/logger';

const initialState = {
  items: [],
  loading: false,
};

const rootReducer = combineReducers({
  items: listReducer,
  loading: uiReducer,
})

export const store = createStore(
  rootReducer, 
  initialState,
  applyMiddleware(logger)
);