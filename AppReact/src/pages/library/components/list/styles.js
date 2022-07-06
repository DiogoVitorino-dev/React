import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
export const Flist = styled(FlatList)`
  margin-top: 20px;
  padding: 0 20px;
`;
