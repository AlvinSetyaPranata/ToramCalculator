import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import SkillPoint from "../screens/SkillPoint";



export default function Routers(): JSX.Element {
    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Status Point" component={Home} options={{tabBarIconStyle: style.bottomBarIcon}}/>
                <Tab.Screen name="Skill Point" component={SkillPoint} options={{tabBarIconStyle: style.bottomBarIcon}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}


const style = StyleSheet.create({
    "bottomBarIcon" : {
        display: "none"
    }
})