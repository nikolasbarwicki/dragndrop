const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD_ITEM':
      return [...state, payload];
    case 'DELETE_ITEM':
      return [...state.filter((el) => el.id !== payload)];
    default:
      return state;
  }
};
