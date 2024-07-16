import React from 'react';
import styled from 'styled-components/native';

const BlockContainer = styled.View`
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: ${(props) => props.theme.blockBackground};
  shadow-color: #000;
  shadow-offset: 0px 2px; /* Chỉnh sửa cú pháp shadow-offset */
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin-bottom: 10px;
`;

const Block = ({ title, children }) => (
  <BlockContainer>
    <Title>{title}</Title>
    {children}
  </BlockContainer>
);

export default Block;
