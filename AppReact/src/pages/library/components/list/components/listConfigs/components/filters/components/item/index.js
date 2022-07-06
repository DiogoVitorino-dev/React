import React from 'react';
import {ContainerTouchable, TextTouchable, Touchable} from './styles';

export default function Item({name}) {
  return (
    <Touchable>
      <ContainerTouchable>
        <TextTouchable>{name}</TextTouchable>
      </ContainerTouchable>
    </Touchable>
  );
}
