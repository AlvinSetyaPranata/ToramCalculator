import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



export default function Routers(): JSX.Element {
    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="home" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}