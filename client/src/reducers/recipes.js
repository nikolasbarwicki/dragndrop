const initialState = { recipes: null, loading: true };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_RECIPES':
      return { ...state, recipes: payload, loading: false };
    default:
      return state;
  }
};
