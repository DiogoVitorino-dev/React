import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c8c8c8',
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBox: {
    backgroundColor: 'tomato',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
  },
  inner: {
    flex: 1,
    backgroundColor: '#a3a3a3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
    backgroundColor: '#c9c9c9',
  },
  text: {
    fontSize: 86,
  },
});

export default function Test() {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>

      <View style={styles.containerBox}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
              box2
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
              box2
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
              box2
            </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text style={styles.text} numberOfLines={1} adjustsFontSizeToFit>
              box2
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
