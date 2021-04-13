export const loadItems = {
  type: 'LOAD_ITEMS'
}

export function setItems(items) {
  return {
    type: 'SET_ITEMS',
    payload: items
  }
}

export function addItem(title) {
  return {
    type: 'ADD_ITEM',
    payload: { title: title }
  }
}

export function clearAllItems() {
  return {
    type: 'CLEAR_ITEMS',
  }
}
