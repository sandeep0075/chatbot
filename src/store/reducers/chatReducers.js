const initialState = {
  messages: [],
  inputMessage: '',
  isLoading: false,
  isError: '',
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'ADD_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'REMOVE_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'ADD_ERROR':
      return {
        ...state,
        isError: action.payload.error,
      };
    default:
      return state;
  }
};

export default chatReducer;
