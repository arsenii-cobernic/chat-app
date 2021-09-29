import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

const FormContainer = styled.div`
  margin-top auto;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewMessageInput = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 8px; 
  margin-left: 8px;
  width: 20%;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: #8eb8fd;
`;

const NewMessageForm = ({ onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    onCreatePressed(inputValue);
    setInputValue('');
  }

  const handleKeyPress = (event) => {
    if (event.code === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <FormContainer>
      <NewMessageInput
        type="text"
        placeholder="Type your message here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <SubmitButton onClick={handleSubmit}>Send Message</SubmitButton>
    </FormContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  onCreatePressed: text => dispatch(createMessage(text))
});

export default connect(null, mapDispatchToProps)(NewMessageForm);
