

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import WelcomeScreen from './src/screens/StartScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                    title: 'Home',
                    
                }}/>
                <Stack.Screen 
                name="Start" 
                component={WelcomeScreen}
                options={{
                    title: 'Welcome',
                   
                }}/>
                <Stack.Screen 
                name="Details" 
                component={DetailsScreen}
                options={{
                    title: 'Details',
                   
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;