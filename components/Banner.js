import React from 'react';
import styled from 'styled-components/native';

const BannerWrapper = styled.View`
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  height: 200px;
  margin: 20px 0;
`;

const BannerImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const Banner = ({ src }) => (
  <BannerWrapper>
    <BannerImage source={{ uri: src }} />
  </BannerWrapper>
);

export default Banner;
