const tacticReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TACTIC':
      return state.concat([action.data]);
    case 'DELETE_TACTIC':
      return state.filter((tactic)=>tactic.id !== action.id);
    default:
      return state;
  }
}
export default tacticReducer;