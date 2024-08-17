import axios from 'axios';

export const addMessage = (message, isBotResponse = false) => {
  return {
    type: 'ADD_MESSAGE',
    payload: {
      isBotResponse,
      message,
    },
  };
};

export const addError = (error) => {
  return {
    type: 'ADD_ERROR',
    payload: {
      error,
    },
  };
};

export const sendUserInputHandler = async (userInput) => {
  try {
    const response = await axios.get('endpoint');
    return addMessage(response.data.output, true);
  } catch (e) {
    console.log(e);
    return addError(e.message);
  }
};
