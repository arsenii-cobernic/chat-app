import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import MessagesList from './chat/Components/MessagesList';

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`;

const App = () => (
  <AppContainer>
    <MessagesList />
  </AppContainer>
);

export default hot(module)(App);