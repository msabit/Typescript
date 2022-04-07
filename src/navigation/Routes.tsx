import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AppContext} from '../constants/context';
//Screens Import 
import HomeScreen from '../screens/Home'
import CartScreen from '../screens/Cart'

const Stack = createNativeStackNavigator();

function App() {
  const [List,setList] =useState([]);
  
  const addItemList = list => {
    setList(list)
  };

  return (
    <AppContext.Provider
      value={{
        List:List,
        addItemList:addItemList
      }}>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen } />
      </Stack.Navigator>
    </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;