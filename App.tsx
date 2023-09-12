import React from 'react'

import { SafeAreaView, StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { GluestackUIProvider, Box, Text } from '@gluestack-ui/themed'
import { config } from './src/theme/gluestack-ui.config'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRoute } from './src/config/Route'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
        <GluestackUIProvider config={config} colorMode="dark">
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}>
                    <Stack.Screen
                        name={AppRoute.Home.name}
                        component={AppRoute.Home.route}
                    />
                    <Stack.Screen
                        name={AppRoute.AddItem.name}
                        component={AppRoute.AddItem.route}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GluestackUIProvider>
    )
}

export default App
