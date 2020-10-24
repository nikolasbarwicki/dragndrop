const initialState = { recipes: null, loading: true };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_RECIPES':
      return { ...state, recipes: payload, loading: false };
    // case 'ADD_ITEM':
    //   return { ...state, payload };
    // case 'DELETE_ITEM':
    //   return { ...state.filter((el) => el.id !== payload) };
    default:
      return state;
  }
};
