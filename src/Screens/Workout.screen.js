import React, { useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessIems } from "./context/Context";


const Workoutscreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const navigation = useNavigation();
    const { completed, setCompleted } = useContext(FitnessIems);
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    backgroundColor: "white",
                    marginTop: 35
                }}
            >

                <Image
                    style={{
                        width: "100%",
                        height: 170,
                        marginTop: 15,
                        borderRadius: 15
                    }}
                    source={{ uri: route.params.image }}
                />

                <Ionicons
                    onPress={() => navigation.goBack()}
                    style={{
                        position: "absolute",
                        top: 25,
                        left: 14
                    }}
                    name="arrow-back-outline"
                    size={28}
                    color="#FDE2F3"
                />
                {route.params.excercises.map((item, index) => (
                    <Pressable
                        style={{
                            margin: 10,
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        key={index}
                    >

                        <Image
                            style={{
                                width: 90,
                                height: 90
                            }}
                            source={{ uri: item.image }}
                        />

                        <View>
                            <Text
                                style={{
                                    marginLeft: 10,
                                    color: "#272829",
                                    fontWeight: "bold",
                                    fontSize: 17,
                                    width: 190,
                                }}
                            >
                                {item.name}
                            </Text>

                            <Text
                                style={{
                                    marginTop: 4,
                                    marginLeft: 12,
                                    color: "#7D7C7C",
                                    fontWeight: "bold",
                                    fontSize: 18
                                }
                                }
                            > x{item.sets}
                            </Text>
                        </View>
                        {completed.includes(item.name) ? (
                            <AntDesign
                                style={{
                                    marginLeft: 20
                                }}
                                name="checkcircle"
                                size={24}
                                color="green"

                            />
                        ) : (
                            null
                        )}
                    </Pressable>
                ))}
            </ScrollView>

            <Pressable
                onPress={() => {
                    navigation.navigate("Fit", {
                        excercises: route.params.excercises,
                    })
                    setCompleted([]);
                }}
                style={{
                    backgroundColor: "#7360DF",
                    padding: 10,
                    width: 120,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginVertical: 20,
                    borderRadius: 6,

                }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 15,
                        fontWeight: "600"
                    }}>
                    START
                </Text>
            </Pressable>
        </>
    );
};

export default Workoutscreen;

const styles = StyleSheet.create({});