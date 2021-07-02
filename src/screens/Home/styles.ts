import styled, { css } from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import CarDTO from '../../dtos/CarDTO';

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

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
  showsVerticalScrollIndicator: false,
})``;

export const ViewSchedules = styled(RectButton)`
  ${({ theme }) => css`
    width: 60px;
    height: 60px;

    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.main};
    border-radius: 30px;

    position: absolute;
    bottom: 16px;
    right: 16px;
  `}
`;
