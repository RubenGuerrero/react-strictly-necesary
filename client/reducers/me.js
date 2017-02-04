const defaultState = {
  name: 'Rubén Guerrero'
}

export function me(state = defaultState, action){
  switch(action.type){
    case 'UPDATE_NAME_DONE':
      return { ...state, name: action.name }
    default:
      return state;
  }
}
