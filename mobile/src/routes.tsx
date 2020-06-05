import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../src/pages/Home';
import Points from '../src/pages/Points';
import Detail from '../src/pages/Detail';

const AppStack = createStackNavigator();

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{
        cardStyle: {
          backgroundColor: '#F0F0F5'
        }
      }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
