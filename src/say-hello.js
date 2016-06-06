export default (state='', action) => {
  switch (action.type) {
    case 'SAY_HELLO':
      return action.value;
    default:
      return state;
    }
}
