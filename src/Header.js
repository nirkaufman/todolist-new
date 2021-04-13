import { useRef } from "react";
import {useDispatch} from 'react-redux';
import {addItem} from './actions/list.actions';

function Header () {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if(event.code === 'Enter') {
      dispatch(addItem(inputRef.current.value));
    }
  }

  return (
    <header class="header">
      <h1>TODO</h1>
      <input class="new-todo"
             ref={inputRef}
             onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            autofocus />
    </header>
  )
}

export default Header;