import { DECREASE_COUNTER, INCREASE_COUNTER } from "../actions/types";

const initialState = {
  count: 0,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { count: state.count + 1 };
    case DECREASE_COUNTER:
      if (state.count == 0) {
        return { count: 0 };
      }
      return { count: state.count - 1 };
    default:
      return state;
  }
};
