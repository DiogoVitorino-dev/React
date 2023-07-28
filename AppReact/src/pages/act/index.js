import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const estragaPC = async () => {
  let count = 0;
  while (count < 1000000) {
    count += 1;
  }
};
export default function ActTest() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    estragaPC().then(setCount(prev => prev + 1));
  }, []);

  return <Text>Count {count}</Text>;
}
