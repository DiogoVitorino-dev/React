import React from 'react';
import { Pressable, StyleSheet, View as ViewNative } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from './Themed';

import Colors from '../constants/Colors';
import Animated, { useSharedValue } from 'react-native-reanimated';

interface IProps{
	label:String
}

export function MenuButton({label}:IProps) {
	const backgroundColor = useSharedValue({})
  return (
		<Pressable >
   <Animated.View
	 	style={styles.container}

		>
    	<Text style={styles.label}>{label}</Text>
			<ViewNative style={styles.afterBar} />
			</Animated.View>
	 </Pressable>
  );
};

const styles = StyleSheet.create({
  container:{
		maxWidth:400,
		flex:1,
		maxHeight:60,
		flexDirection:'row',
		justifyContent:"center",
		alignItems:"center",
		paddingVertical:15,
  },
	afterBar:{
		boxSizing:'content-box',
		width:15,
		position:'absolute',
		right:-16,
		borderStartWidth:15,
		borderStartColor:Colors.background,
		backgroundColor: Colors.text,
		transform:[{skewX:'30deg'}],
		height:'100%',
	},
	label:{
    fontSize:22,
		fontWeight:"300",
		textTransform:"uppercase"
  },
});