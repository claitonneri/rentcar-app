import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;

    background-color: ${theme.colors.background_primary};
  `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: ${RFValue(280)}px;

    background-color: ${theme.colors.header};

    justify-content: center;
    padding: 24px;
    padding-top: ${getStatusBarHeight() + 24}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;
    color: ${theme.colors.background_secondary};

    margin-top: 24px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_400};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.background_secondary};

    margin-top: 24px;
  `}
`;

export const Content = styled.View`
  flex: 1;
  padding: 12px 16px;
`;

export const Appointments = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-bottom: 12px;
`;

export const AppointmentsTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.text};
  `}
`;

export const AppointmentsQuantity = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_600};
    font-size: ${RFValue(16)}px;
    color: ${theme.colors.header};
  `}
`;

export const Wrapper = styled.View`
  margin-bottom: 16px;
`;

export const SchedulePeriod = styled.View`
  ${({ theme }) => css`
    width: 100%;
    padding: 14px 24px;
    margin-top: -14px;

    background-color: ${theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const SchedulePeriodTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.secondary_500};
    color: ${theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `}
`;

export const SchedulePeriodDates = styled.View`
  flex-direction: row;
`;

export const SchedulePeriodDateRental = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary_400};
    color: ${theme.colors.title};
    font-size: ${RFValue(12)}px;
  `}
`;
