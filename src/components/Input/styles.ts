import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;

  margin-top: 8px;
`;
export const IconContainer = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-right: 2px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;

    background-color: ${theme.colors.background_secondary};
  `}
`;

export const IconContainerPassword = styled.View`
  ${({ theme }) => css`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;

    margin-right: 2px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;

    background-color: ${theme.colors.background_secondary};
  `}
`;

export const InputText = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;

    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;

    padding: 0 16px;

    background-color: ${theme.colors.background_secondary};
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
  `}
`;
