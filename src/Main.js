import {useSelector} from 'react-redux';

function Main () {
  const items = useSelector(state => state.items)

  return (
    <section class="main">
    {loading && <h2>LOADING ITEMS...</h2>}
    <input class="toggle-all"
           type="checkbox" />
    <ul class="todo-list">
      {items.map( item => (
        <li>
        <div class="view">
          <input class="toggle"
                 type="checkbox" />
          <label>{item.title}</label>
          <button class="destroy" />
        </div>
        <input class="edit" />
      </li>
      ))}
      
    </ul>
  </section>
  )
}

export default Main;