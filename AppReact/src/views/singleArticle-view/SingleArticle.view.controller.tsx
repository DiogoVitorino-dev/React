import {useEffect, useState} from 'react';
import useArticleViewModel from '../../view-models/Article.view.model';

interface IViewControllerParams {
	articleId?: number;
}

export default function useSingleArticleViewController({
	articleId,
}: IViewControllerParams) {
	const [title, setTitle] = useState<string>('');
	const {articles, getArticle} = useArticleViewModel();

	console.log(articles?.length);

	useEffect(() => {
		setTitle(articles?.find(article => article.id === articleId)?.title || '');
	}, [articles, articleId]);

	useEffect(() => {
		getArticle();
	}, [getArticle]);

	return {
		title,
	};
}
