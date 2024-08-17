import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage, sendUserInputHandler } from '../store/actions';

const Chatbox = () => {
  const [input, setInput] = useState('');
  const messages = useSelector((state) => state.chatReducer.messages);
  const isLoading = useSelector((state) => state.chatReducer.isLoading);
  const isError = useSelector((state) => state.chatReducer.isError);
  const dispatch = useDispatch();
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_LOADING' });
      dispatch(addMessage(input));
      setInput('');
      dispatch(await sendUserInputHandler(input));
      dispatch({ type: 'REMOVE_LOADING' });
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className='chat-container'>
      {isError ? (
        <div negative>
          <div>Error</div>
          <p>{isError}</p>
        </div>
      ) : (
        <>
          <div className='header'>
            <div className='user-details'>
              <span>
                <img
                  src='https://lh3.googleusercontent.com/a/ACg8ocJm0sJuUHaKzDNjGNN6NVJXLKYHrq-cJWFTRWbfAYF5FBRMvPGR=s83-c-mo'
                  alt=''
                />
              </span>
              <div className='user-info'>
                <h5>Sandeep Parukoti</h5>
                <p>Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div className='body'>
            {messages.map((message, index) => (
              <div
                className={`chat-box ${
                  message.isBotResponse ? 'receiver' : 'sender'
                }`}
                key={index}
              >
                <p key={index}>{message.message}</p>
              </div>
            ))}
            <span className='loader'>{isLoading && '...bot writing'}</span>
            <div ref={messagesEndRef} />
          </div>
          <div className='input-container'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>
              <svg
                fill='#fff'
                width='20px'
                height='20px'
                viewBox='0 0 256 256'
                id='Flat'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M231.626,128a16.015,16.015,0,0,1-8.18262,13.96094L54.53027,236.55273a15.87654,15.87654,0,0,1-18.14648-1.74023,15.87132,15.87132,0,0,1-4.74024-17.60156L60.64746,136H136a8,8,0,0,0,0-16H60.64746L31.64355,38.78906A16.00042,16.00042,0,0,1,54.5293,19.44727l168.915,94.59179A16.01613,16.01613,0,0,1,231.626,128Z' />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Chatbox;
