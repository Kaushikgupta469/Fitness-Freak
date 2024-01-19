import React from 'react';
import { StyleSheet } from "react-native";
import StackNavigator from "./src/navigation/StackNavigator";
import { FitnessContext } from './src/Screens/context/Context';

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
