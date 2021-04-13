export function listReducer(items = [], action) {
 switch (action.type) {

  case 'ADD_ITEM':
    return [...items, action.payload];

  case 'CLEAR_ITEMS':
    return [];

  default:
    return items;
 }
}