import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home'
import Detail from './pages/Detail'
import Search from './pages/Search'
import CategoryPosts from './pages/CategoryPosts'

const Stack = createNativeStackNavigator();
function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    title: 'Detalhes',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />
            <Stack.Screen
                name="Category"
                component={CategoryPosts}
                options={{
                    title: 'Categroria',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Procurar',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#232330'
                    }
                }}
            />
        </Stack.Navigator>

    )
}
export default Routes;