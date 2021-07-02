import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps {
  color?: string;
  enabled?: boolean;
  loading?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  ${({ theme, color, enabled, loading }) => css`
    width: 100%;

    padding: 20px;
    justify-content: center;
    align-items: center;

    background-color: ${color || theme.colors.main};

    border-radius: 4px;

    opacity: ${enabled === false || loading === true ? 0.5 : 1};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${theme.colors.background_secondary};
  `}
`;
