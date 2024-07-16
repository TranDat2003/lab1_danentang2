import React from 'react';
import styled from 'styled-components/native';

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px 0;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const Button = ({ children, onPress }) => (
  <ButtonWrapper onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);

export default Button;
