import React, { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const FitnessIems = createContext();


const FitnessContext = ({ children }) => {
    const [completed, setCompleted] = useState([]);
    const [workout, setWorkout] = useState(0);
    const [calories, setCalories] = useState(0);
    const [minutes, setMinutes] = useState(0);
    return (
        <FitnessIems.Provider
            value={{
                completed,
                setCompleted,
                workout,
                setWorkout,
                calories,
                setCalories,
                minutes,
                setMinutes
            }}
        >
            {children}
        </FitnessIems.Provider>
    );
};

export { FitnessContext, FitnessIems }

const styles = StyleSheet.create({});
