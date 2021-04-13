import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header'
import Main from './Main';

function App() {  

  useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/todos')
    .then( results => results.json() )
    .then( items =>  )
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
