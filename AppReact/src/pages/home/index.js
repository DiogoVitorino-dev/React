import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import ForUser from './components/forUser';
import Header from './components/header';
import MostListened from './components/mostListened';
import PodcastSuggest from './components/podcastSuggest';
import RecentlyListened from './components/recentlyListened';
import {Background, Container} from './styles';

export default function HomeScreen() {
  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent />
      <Background />
      <Header />
      <MostListened />
      <PodcastSuggest />
      <ForUser />
      <RecentlyListened />
    </Container>
  );
}
