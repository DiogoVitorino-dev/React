export interface ArticleDTO {
	id: number;
	title: string;
}

export interface CreateArticleDTO {
	title: string;
}

interface IFetchResponse {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getAllArticles = async (): Promise<ArticleDTO[] | null> => {
	console.log('fetch');

	const response = await fetch(`${API_URL}/todos?_limit=10`);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	let data = await response.json();
	const convertData: ArticleDTO[] = data.filter(
		(resItem: IFetchResponse) =>
			({id: resItem.id, title: resItem.title} as ArticleDTO),
	);
	return convertData;
};

export const postArticle = async (
	createData: CreateArticleDTO,
): Promise<ArticleDTO | null> => {
	const response: ArticleDTO = {
		id: 10 + createData.title.length,
		title: createData.title,
	};
	const mock = JSON.stringify(response);
	return await JSON.parse(mock);
};
