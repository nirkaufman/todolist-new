import {useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './Header'
import Main from './Main';

function App() {  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadItems())
  }, [])

  return (
    <section class="todoapp">
      <Header/>
      <Main />

      <footer class="footer">
        <span class="todo-count"><strong>0</strong> items left</span>
        <button class="clear-completed">Clear completed
    </button>
      </footer>

    </section>
  );
}

export default App;
