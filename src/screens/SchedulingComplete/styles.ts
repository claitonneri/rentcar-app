import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.header};

    padding-top: ${RFValue(96)}px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    color: ${theme.colors.shape};
    font-size: ${RFValue(30)}px;

    margin-top: 40px;
  `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text_detail};
    font-family: ${theme.fonts.primary_400};
    line-height: ${RFValue(24)}px;
    text-align: center;

    margin-top: 16px;
  `}
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin: ${RFValue(80)}px;
`;
