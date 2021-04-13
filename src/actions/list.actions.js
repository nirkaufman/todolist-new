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
