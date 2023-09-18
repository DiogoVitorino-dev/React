import { StyleSheet } from 'react-native';
import { MenuButton, View } from '../../components';
import Colors from '../../constants/Colors';

export default function MenuPage() {
  return (
    <View style={styles.container}>
      <MenuButton label="Lista de musicas" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		height:"100%",
		paddingVertical:20
  },
	button:{
		backgroundColor: "red"

	},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
