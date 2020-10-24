const initialState = { recipe: null, loading: true };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_RECIPE':
      return { ...state, recipe: payload, loading: false };
    default:
      return state;
  }
};
