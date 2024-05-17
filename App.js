import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import { Provider as PaperProvider } from 'react-native-paper';
import PictureViewer from './components/PictureViewer';




const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Gallery" component={Gallery} />
          <Tab.Screen name="PictureViewer" component={PictureViewer} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;