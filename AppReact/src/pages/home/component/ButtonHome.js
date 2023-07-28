import React from 'react';
import {Button} from 'react-native';

export default function ButtonHome({disabled, onPressButton}) {
  return (
    <Button
      title="add fifty"
      onPress={() => onPressButton(50)}
      color={disabled ? 'tomato' : 'turquoise'}
    />
  );
}
