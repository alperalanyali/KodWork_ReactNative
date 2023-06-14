import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from './pages/Jobs/Jobs';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Jobs">
        <Drawer.Screen name="Jobs" component={Jobs} />
        <Drawer.Screen name="FavoriteJobs" component={FavoriteJobs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}