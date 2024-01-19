import React, { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { FitnessIems } from "./context/Context";

const Fitscreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const [index, setIndex] = useState(0);
    const excercises = route.params.excercises;
    const navigation = useNavigation();
    const current = excercises[index];
    //console.log(current, "first exercise");
    const {
        completed,
        setCompleted,
        minutes,
        setMinutes,
        calories,
        setCalories,
        workout,
        setWorkout
    } = useContext(FitnessIems);
    //console.log(completed, "completed excercise");
    return (
        <SafeAreaView>
            <Image
                style={{
                    width: "auto",
                    height: 370,
                    marginTop: "auto"
                }}
                source={{ uri: current.image }}
            />
            <Ionicons
                onPress={() => navigation.goBack()}
                style={{
                    position: "absolute",
                    top: 45,
                    left: 20
                }}
                name="arrow-back-outline"
                size={28}
                color="black"
            />

            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 30,
                    fontWeight: "bold"
                }}
            >
                {current.name}
            </Text>

            <Text
                style={{
                    marginLeft: 150,
                    marginTop: 30,
                    fontSize: 35,
                    fontWeight: "bold",
                    color: "#7D7C7C"
                }}
            >
                x{current.sets}
            </Text>

            {index + 1 >= excercises.length ? (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                    style={{
                        backgroundColor: "#7360DF",
                        marginLeft: "auto",
                        marginTop: 30,
                        marginRight: "auto",
                        borderRadius: 20,
                        padding: 10,
                        width: 150
                    }}>

                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 20
                        }}
                    >
                        DONE
                    </Text>
                </Pressable >
            ) : (
                <Pressable
                    onPress={() => {
                        navigation.navigate("Rest")
                        setCompleted([...completed, current.name])
                        setWorkout(workout + 1)
                        setMinutes(minutes + 2.5)
                        setCalories(calories + 6.30)
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                    style={{
                        backgroundColor: "#7360DF",
                        marginLeft: "auto",
                        marginTop: 30,
                        marginRight: "auto",
                        borderRadius: 20,
                        padding: 10,
                        width: 150
                    }}>

                    <Text
                        style={{
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 20
                        }}
                    >
                        DONE
                    </Text>
                </Pressable >
            )}

            <Pressable
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 50
                }}
            >

                <Pressable
                    disabled={index === 0}
                    onPress={() => {
                        navigation.navigate("Rest")

                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000)
                    }}
                    style={{
                        backgroundColor: "#36AE7C",
                        padding: 10,
                        borderRadius: 18,
                        marginHorizontal: 25,
                        width: 100
                    }}
                >

                    <Text
                        style={{
                            color: "white",
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >
                        PREV
                    </Text>
                </Pressable>

                {index + 1 >= excercises.length ? (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Home")
                        }}
                        style={{
                            backgroundColor: "#B31312",
                            padding: 10,
                            borderRadius: 18,
                            marginHorizontal: 25,
                            width: 100
                        }}
                    >
                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            SKIP
                        </Text>
                    </Pressable>
                ) : (
                    <Pressable
                        onPress={() => {
                            navigation.navigate("Rest")

                            setTimeout(() => {
                                setIndex(index + 1)
                            }, 2000)
                        }}
                        style={{
                            backgroundColor: "#B31312",
                            padding: 10,
                            borderRadius: 18,
                            marginHorizontal: 25,
                            width: 100
                        }}
                    >

                        <Text
                            style={{
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "center"
                            }}
                        >
                            SKIP
                        </Text>
                    </Pressable>
                )}
            </Pressable>

        </SafeAreaView >
    );
};

export default Fitscreen;

const styles = StyleSheet.create({});
