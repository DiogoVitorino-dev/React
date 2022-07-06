import React from 'react';
import ListConfigs from './components/configs';
import Filters from './components/filters';
import {ContainerAnimated} from './styles';

export default function ListHeader(offsetY) {
  console.log(offsetY);
  return (
    <ContainerAnimated>
      <Filters />
      <ListConfigs />
    </ContainerAnimated>
  );
}
