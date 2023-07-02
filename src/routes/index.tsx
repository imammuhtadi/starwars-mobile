import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage, { HomePageRoute } from '../presentation/Home';
import DetailPage, { DetailPageRoute } from '../presentation/Detail';
import { People } from 'src/core';

const Stack = createStackNavigator<ParamsTypes>();

export type ParamsTypes = {
  [HomePageRoute]: {};
  [DetailPageRoute]: {
    people: People;
  };
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={HomePageRoute}
        // headerMode="none"
      >
        <Stack.Screen name={HomePageRoute} component={HomePage} />
        <Stack.Screen name={DetailPageRoute} component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;