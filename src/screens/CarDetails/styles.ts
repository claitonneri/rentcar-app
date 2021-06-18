import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background_secondary};
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 38px;
  padding: 0 12px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};

    text-transform: uppercase;
  `}
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.title};
  `}
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${theme.colors.text_detail};

    text-transform: uppercase;
  `}
`;

export const Price = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${theme.colors.main};
  `}
`;

export const Acessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const About = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
    text-align: justify;

    margin-top: 24px;
    line-height: ${RFValue(24)}px;
  `}
`;
