import styled from 'styled-components';
import { FaRegAddressBook } from 'react-icons/fa';

export const LogoBox = styled.div`
  color: ${p =>
    p.logoColor === 'secondary' ? p.theme.colors.logo : 'palevioletred'};
`;

export const LogoText = styled.h1`
  display: flex;
  align-items: center;
  font-size: 32px;
  gap: 4px;
`;

export const LogoIcon = styled(FaRegAddressBook)`
  vertical-align: middle;
`;
