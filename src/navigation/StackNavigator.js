import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home.screen";
import Workoutscreen from "../Screens/Workout.screen";
import Fitscreen from "../Screens/Fit.screen";
import Restscreen from "../Screens/Rest.screen";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Workout" component={Workoutscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Fit" component={Fitscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Rest" component={Restscreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default StackNavigator;

const styles = StyleSheet.create({});
