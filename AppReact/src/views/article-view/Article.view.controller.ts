import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {EViewsNames} from '../../_layouts/EViewsNames';
import {TScreenNavigationProps} from '../../_layouts/types';
import useArticleViewModel from '../../view-models/Article.view.model';

export default function useArticlesViewController() {
	const navigation = useNavigation<TScreenNavigationProps>();

	const [articleName, setArticleName] = useState<string>('');
	const {articles, createArticle, getArticle} = useArticleViewModel();

	const onCreateArticleClick = useCallback(async () => {
		await createArticle({title: articleName});
	}, [createArticle, articleName]);

	const navigateToArticle = useCallback(
		(articleId: number) => {
			navigation.navigate(EViewsNames.SingleArticle, {articleId});
		},
		[navigation],
	);

	useEffect(() => {
		getArticle();
	}, [getArticle]);

	return {
		articleName,
		articles,
		navigateToArticle,
		onCreateArticleClick,
		onArticleNameChange: setArticleName,
	};
}
