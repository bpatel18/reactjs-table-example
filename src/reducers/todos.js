export default (state=[], action) => {
  switch (action.type) {
    case 'TODO_LIST':
      let val = Object.assign([], state);
      val.push(action.value);      
      return val;
    default:
      return state;
    }
}
