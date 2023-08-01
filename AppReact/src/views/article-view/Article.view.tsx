import React from 'react';
import {FlatList, View} from 'react-native';
import {CreateArticleForm, ListItem} from './components';
import useArticlesViewController from './Article.view.controller';

const createArticleFormRender = (
	articleName: string,
	onArticleNameChange: (text: string) => void,
	onCreateArticleClick: () => void,
) => (
	<CreateArticleForm
		articleName={articleName}
		onArticleNameChange={onArticleNameChange}
		onSubmit={onCreateArticleClick}
	/>
);

export default function ArticleView(): React.JSX.Element {
	const {
		articleName,
		articles,
		onArticleNameChange,
		navigateToArticle,
		onCreateArticleClick,
	} = useArticlesViewController();

	return (
		<View>
			<FlatList
				ListHeaderComponent={createArticleFormRender(
					articleName,
					onArticleNameChange,
					onCreateArticleClick,
				)}
				data={articles}
				renderItem={({item}) =>
					ListItem({
						data: item,
						onPress: navigateToArticle,
					})
				}
			/>
		</View>
	);
}
