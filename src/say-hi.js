export default (state='', action) => {
  switch (action.type) {
    case 'SAY_HI':
      return action.value;
    default:
      return state;
    }
}
