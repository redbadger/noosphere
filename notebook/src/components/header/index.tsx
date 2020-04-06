import React from 'react';
import styled from 'styled-components';
import SvgMhraLogo from '../logos/mhra';

const StyledHeader = styled.header`
  display: flex;
  padding: 20px;
  align-items: baseline;

  picture {
    max-width: 15%;
  }

  h1 {
    align-self: center;
    margin-left: 6rem;
  }
`;

const Header: React.FC = () => (
  <StyledHeader>
    <picture>
      <SvgMhraLogo />
    </picture>
    <h1>Noosphere</h1>
  </StyledHeader>
);

export default Header;
