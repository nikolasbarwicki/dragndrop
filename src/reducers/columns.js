const initialState = {
  items: [
    { id: '1', content: 'banan' },
    { id: '2', content: 'marchewka' },
    { id: '3', content: 'burak' },
    { id: '4', content: 'jajko' },
    { id: '5', content: 'ziemniak' },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
