import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Jobs from './pages/Jobs/Jobs';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import {createStackNavigator} from '@react-navigation/stack'
import JobDetail from './pages/JobDetail/JobDetail';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import { store } from './context/store'
import { Provider } from 'react-redux'
const JobStack = ()=>{
  return (

      <Stack.Navigator screenOptions={{headerTintColor:'#E97451'}}>
        <Stack.Screen name="Jobs" component={Jobs}/>
        <Stack.Screen name="JobDetailScreen" component={JobDetail} options={{title:'Detail'}} />
      </Stack.Navigator>

  )
}

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Jobs">
        <Drawer.Screen name="Jobs" component={JobStack} />
        <Drawer.Screen name="FavoriteJobs" component={FavoriteJobs} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}