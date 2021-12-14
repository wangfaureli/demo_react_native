import React from 'react';
// import {Text, View} from 'react-native';
import styled from 'styled-components'
import Simple from '../components/Simple';

const Container = styled.View`
  min-height: 100%;
  justify-content: center;
  align-items: center;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: -100;
`


const Page2 = () => {

  return (
      <Container>
      <Simple />
    </Container>
  );
};
export default Page2;