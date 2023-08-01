import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ArticleView from '../views/article-view/Article.view';
import {EViewsNames} from './EViewsNames';
import {TRootStackParamList} from './types';
import {NavigationContainer} from '@react-navigation/native';
import {SingleArticleView} from '../views/singleArticle-view/SingleArticle.view';

const {Article, SingleArticle} = EViewsNames;

export function RootLayout() {
	const Stack = createNativeStackNavigator<TRootStackParamList>();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={Article}>
				<Stack.Screen name={Article} component={ArticleView} />
				<Stack.Screen
					name={SingleArticle}
					initialParams={{articleId: 0}}
					component={SingleArticleView}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
