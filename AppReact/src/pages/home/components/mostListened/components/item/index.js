import React from 'react';
import {
  ItemContainer,
  ItemImage,
  ItemText,
  ItemTextContainer,
  Touchable,
} from './styles';

export default function Item({ImageSRC}) {
  return (
    <Touchable>
      <ItemContainer>
        <ItemImage source={ImageSRC} />
        <ItemTextContainer>
          <ItemText> playlistaaaaaaaaaaaaaaaaa</ItemText>
        </ItemTextContainer>
      </ItemContainer>
    </Touchable>
  );
}
