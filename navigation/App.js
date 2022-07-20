import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import Wellcome from '../component/Wellcome/Wellcome';
import Setting from '../component/Setting/Setting';
import FoodList from '../component/FoodList/FoodList';
const Stack = createNativeStackNavigator();
const screenOptions = ({route})=>(
{
  headerShown:false
})
const MyStack = () => {
  return <NavigationContainer >
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name='Wellcome' component={Wellcome}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name = 'FoodList' component={FoodList}/>
        <Stack.Screen name = 'Setting' component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
};
export default MyStack;