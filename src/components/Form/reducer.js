export default function reducer(state, { action, payload }) {
  const { name, value } = payload;
  switch (action) {
    case "SET_VALUE":
      state[name] = value;
      return { ...state };
    default:
      return state;
  }
}