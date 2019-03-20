const tacticReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TACTIC':
      return state.concat([action.data]);
    default:
      return state;
  }
}
export default tacticReducer;