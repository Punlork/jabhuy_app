import React from 'react'

import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './src/theme/gluestack-ui.config'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppRoute } from './src/config/Route'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
    return (
        <GluestackUIProvider config={config} colorMode="light">
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
