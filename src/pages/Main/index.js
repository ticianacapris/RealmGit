import React from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Title, Form, Input, Submit, List,
} from './styles';


export default function Main() {
  return (
    <Container>
      <Title>Repositórios</Title>

<Form>
  <Input

    autoCapitalize="none"
    autoCorrect={false}
    placeholder="Procurar repositório..."
  />
  <Submit onPress={()=>{}}>
    <Icon name="add" size={22} color="#FFF" />
  </Submit>
</Form>

      </Container>
  );
}