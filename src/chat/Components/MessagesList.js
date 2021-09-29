import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewMessageForm from './NewMessageForm';
import Message from './Message';

const MessagesWrapper = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
height: 700px;
max-width: 700px;
box-shadow: 0 2px 4px grey;
padding: 15px;
`;

const MessagesList = ({ messages }) => {
  return (
    <MessagesWrapper>
      {messages.length ?
        messages.map(message => <Message message={message} />)
        : <h3 style={{ textAlign: 'center' }}>There are no messages yet.</h3>}
      <NewMessageForm />
    </MessagesWrapper>
  );
};

const mapStateToProps = state => ({
  messages: state.messages.data,
});

export default connect(mapStateToProps, null)(MessagesList);