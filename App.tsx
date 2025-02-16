/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { SplashScreen } from './src/components/animations/splashScreen';
import { HomeScreen } from './src/screens';

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {


    const [showSplash, setShowSplash] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <NavigationContainer>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <>
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen name="Home" component={HomeScreen}
                            options={{
                                headerShown: false
                            }} />
                        <Stack.Screen name="DetailScreen" component={HomeScreen}
                            options={{
                                headerStyle: {
                                    backgroundColor: "#ffffff",
                                },
                                headerTintColor: "#514F4F",
                                headerTitle: ""
                            }} />
                    </Stack.Navigator>
                </>
            )}
        </NavigationContainer>
    );
}


export default App;
