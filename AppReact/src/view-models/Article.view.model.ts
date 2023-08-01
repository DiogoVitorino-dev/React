import useArticleModel from '../model/Article.model';

export default function useArticleViewModel() {
	const {articles, createArticle, getArticle} = useArticleModel();

	return {
		articles,
		createArticle,
		getArticle,
	};
}
