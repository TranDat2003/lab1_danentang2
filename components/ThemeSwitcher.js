import React from 'react';
import styled from 'styled-components/native';

const Switcher = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  padding: 10px 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const SwitcherText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const ThemeSwitcher = ({ toggleTheme }) => (
  <Switcher onPress={toggleTheme}>
    <SwitcherText>Đổi Theme</SwitcherText>
  </Switcher>
);

export default ThemeSwitcher;
