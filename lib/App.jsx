import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PluginTheme from './Theme';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {
  return (
    <ThemeProvider theme={PluginTheme}>
      <Wrapper>
        <Title>
          Hello worlds!!
        </Title>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
