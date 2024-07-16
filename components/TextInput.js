import React from 'react';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin: 10px 0;
`;

const TextInput = (props) => <Input {...props} />;

export default TextInput;
