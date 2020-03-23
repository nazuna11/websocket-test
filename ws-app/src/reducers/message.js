export const message = (state={list: []}, action) => {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return Object.assign({}, state, {list: [...state.list, action.payload]})
    default:
      return state
  }
}
