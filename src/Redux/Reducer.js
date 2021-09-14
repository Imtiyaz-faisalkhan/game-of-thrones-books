let defaultState = [];
export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.addData];
    default:
      return state;
  }
};
