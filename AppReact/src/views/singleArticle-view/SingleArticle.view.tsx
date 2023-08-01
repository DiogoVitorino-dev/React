import React from 'react';
import {Text, View} from 'react-native';
import useSingleArticleViewController from './SingleArticle.view.controller';

interface IViewParams {
	route: {
		params: {
			articleId?: number;
		};
	};
}

export function SingleArticleView({route}: IViewParams) {
	const {title} = useSingleArticleViewController({
		articleId: route.params.articleId,
	});

	return (
		<View>
			<Text>{title}</Text>
		</View>
	);
}
