import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: black;
  padding: 20px;

  h2 {
    color: white;
    text-align: center;
  }
`;

const Footer: React.FC = () => (
  <StyledFooter>
    <h2>I am a footer</h2>
  </StyledFooter>
);

export default Footer;
