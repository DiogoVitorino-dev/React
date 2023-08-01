import {useCallback, useState} from 'react';
import {
	CreateArticleDTO,
	ArticleDTO,
	getAllArticles,
	postArticle,
} from './api/article';

export default function useArticleModel() {
	const [articleData, setArticleData] = useState<ArticleDTO[] | null>(null);

	const getArticle = useCallback(async () => {
		const articles = await getAllArticles();
		setArticleData(articles);
	}, []);

	const createArticle = useCallback(
		async (createData: CreateArticleDTO) => {
			if (Array.isArray(articleData)) {
				const response = await postArticle(createData);

				if (response !== null) {
					setArticleData([
						...articleData,
						{id: response.id, title: response.title},
					]);
				}
			}
		},
		[articleData],
	);

	return {
		articles: articleData,
		createArticle,
		getArticle,
	};
}
