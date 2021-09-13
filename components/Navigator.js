//import 'react-native-gesture-handler';
import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ScreenStack} from 'react-native-screens';

import TelaLogin from './Login';
import Register from './Register';
import Register2 from './Register2';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default function Navigator(){
     return (
         <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Login"
                screenOptions={{
                    headerStyle: { backgroundColor: 'steelblue' },
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold', fontSize: 25, },
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={TelaLogin}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Register" 
                    component={Register} 
                    options={{title: ''}}
                />
                <Stack.Screen 
                    name="Register2" 
                    component={Register2} 
                    options={{title: ''}}
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{title: ''}}
                />

            </Stack.Navigator>
           
        </NavigationContainer>
     );
}