import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {Container} from './styles';
import ButtonHome from './component/ButtonHome';

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const sumAmount = (number = 0) => setCount(prev => prev + number);
  const subAmount = (number = 0) => setCount(prev => prev - number);

  const handleOnPressButtonHome = number => sumAmount(number);

  return (
    <Container>
      <View>
        <Text style={{textAlign: 'center'}}>{count}</Text>
      </View>
      <View
        style={{
          flex: 1,
          maxHeight: 200,
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Button title="add one" onPress={() => sumAmount(1)} />
        <Button title="subtract one" onPress={() => subAmount(1)} />
        <ButtonHome disabled onPressButton={handleOnPressButtonHome} />
      </View>
    </Container>
  );
}
