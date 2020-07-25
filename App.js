import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/components/Home';
import Login from './app/components/Login';
import Details from './app/components/Details';
import Signup from './app/components/Signup';
import blog from './app/components/blog';
import task from './app/components/task';
import ViewTask from './app/components/ViewTasks';
import ViewBlog from './app/components/ViewBlog';
import Acc from './app/components/Acc';
import DisplayTask from './app/components/DisplayTask';
import DisplayBlog from './app/components/DisplayBlog';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={Details}  />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="blog" component={blog} />
        <Stack.Screen name="task" component={task} />
        <Stack.Screen name="ViewTask" component={ViewTask} />
        <Stack.Screen name="ViewBlog" component={ViewBlog} />
        <Stack.Screen name="Acc" component={Acc} />
        <Stack.Screen name="DisplayTask" component={DisplayTask} />
        <Stack.Screen name="DisplayBlog" component={DisplayBlog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
