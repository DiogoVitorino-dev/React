import React, {useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';

export default function TasksScreen() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const handlePressFetch = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const json = await response.json();
      const list = Object.keys(json).map(key => json[key]);
      setTasks(tasks.concat(list));
    } catch (er) {
      setError(er.message);
    }
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={tasks}
        ListEmptyComponent={error !== null ? <Text>{error}</Text> : null}
        renderItem={({item}) => (
          <Text style={{fontSize: 22, margin: 5}} key={item.id}>
            {item.title}
          </Text>
        )}
      />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          right: 50,
          bottom: 50,
          borderRadius: 50,
          overflow: 'hidden',
        }}>
        <Button
          color="turquoise"
          onPress={() => handlePressFetch()}
          title="fetch"
        />
      </View>
    </View>
  );
}
