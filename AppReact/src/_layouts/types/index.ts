import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {EViewsNames} from '../EViewsNames';

const {Article, SingleArticle} = EViewsNames;

export type TRootStackParamList = {
	[Article]: undefined;
	[SingleArticle]: {articleId: number};
};

export type TScreenNavigationProps = NativeStackNavigationProp<
	TRootStackParamList,
	EViewsNames
>;
