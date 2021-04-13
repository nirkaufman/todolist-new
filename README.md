1. App compornnrt should dispatch 'loadItems' action
2. create api middleware:
  - check if the action type is loadItems
  - dispatch the action toggleLoading 
  - use fetch to get otems from API
  - dispatch the action setItems 
  - dispatch the action toggleLoading 