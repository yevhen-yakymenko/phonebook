import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  padding-left: ${p => p.theme.space[5]}px;
  flex-grow: 2;
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const StyledLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[4]}px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: ${p => p.theme.colors.navMenu};
  transition: color 100ms linear, font-weight 100ms linear;

  &:hover {
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.logo};
  }

  &::after {
    display: block;
    content: attr(title);
    font-weight: ${p => p.theme.fontWeights.bold};
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;