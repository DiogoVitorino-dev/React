import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface IListItemProps {
	data: {id: number; title: string};
	onPress: (id: number) => void;
}

export function ListItem({data, onPress}: IListItemProps) {
	return (
		<TouchableOpacity onPress={() => onPress(data.id)}>
			<View id={String(data.id)}>
				<Text>{data.title}</Text>
			</View>
		</TouchableOpacity>
	);
}
