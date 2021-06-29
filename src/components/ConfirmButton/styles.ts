import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  ${({ theme }) => css`
    width: 120px;
    height: 56px;

    background-color: ${theme.colors.shape_dark};

    justify-content: center;
    align-items: center;

    border-radius: 10px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    color: ${theme.colors.shape};
    font-size: ${RFValue(12)}px;
  `}
`;
