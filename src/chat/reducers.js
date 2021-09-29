import {
  CREATE_MESSAGE
} from './actions';

const initialState = { data: [] };

export const messages = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case (CREATE_MESSAGE): {
      const { message } = payload;
      return {
        ...state,
        data: state.data.concat(message)
      };
    }

    default:
      return state;
  }
}