import React from 'react';
import styled from 'styled-components';

const MessageItem = styled.div`
  margin-top: 8px;
  padding: 16px;
  align-self: flex-end;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px grey;
  text-align: right;
`;

const Message = ({ message }) => {

  return (
    <MessageItem>
      <h4>{message}</h4>
    </MessageItem>
  );
}

export default Message;