import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerScreen from './src/screens/PlayerScreen';
import MainStack from './src/navigation/MainStack';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Main"
          component={MainStack}
          options={{
            headerTitle: 'Lingumi',
          }}
        />
        <RootStack.Screen name="Player" component={PlayerScreen} />
      </RootStack.Navigator>
    </>
  );
};
export default RootNavigation;
