import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 113px;

    background-color: ${theme.colors.header};
    justify-content: flex-end;

    padding: 24px;
  `};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Total = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.title};
  `}
`;
