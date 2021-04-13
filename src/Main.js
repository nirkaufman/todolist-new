import {useSelector} from 'react-redux';

function Main () {
  const items = useSelector(state => state.items);
  const isLoading = useSelector(state => state.isLoading);

  return (
    <section class="main">
    <input class="toggle-all"
           type="checkbox" />
    <ul class="todo-list">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        items.map( item => (
          <li>
          <div class="view">
            <input class="toggle"
                   type="checkbox" />
            <label>{item.title}</label>
            <button class="destroy" />
          </div>
          <input class="edit" />
        </li>
        ))
      )}
    
    </ul>
  </section>
  )
}

export default Main;