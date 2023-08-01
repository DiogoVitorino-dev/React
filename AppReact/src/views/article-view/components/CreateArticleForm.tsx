import React from 'react';
import {Button, TextInput, View} from 'react-native';

interface ICreateArticleProps {
	articleName: string;
	onArticleNameChange: (text: string) => void;
	onSubmit: () => void;
}

export function CreateArticleForm({
	articleName,
	onArticleNameChange,
	onSubmit,
}: ICreateArticleProps) {
	return (
		<View>
			<TextInput
				onChangeText={onArticleNameChange}
				value={articleName}
				placeholder="Add an Article..."
			/>
			<Button title="Create Article" onPress={onSubmit} />
		</View>
	);
}
