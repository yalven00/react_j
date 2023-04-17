export default function reducer(state = {}, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'SET':
      newState[action.id] = action.value;
      return newState;
    case 'TOGGLE':
      newState[action.id] = !state[action.id];
      return newState;
    default:
      return newState;
  }
}