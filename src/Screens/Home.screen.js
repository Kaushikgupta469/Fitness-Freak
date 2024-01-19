import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import FitnessCards from "../components/FitnessCard.component";
import { FitnessIems } from "./context/Context";

const Homescreen = () => {
    const {
        minutes,
        calories,
        workout,
    } = useContext(FitnessIems);
    return (
        <ScrollView
            style={{
                marginBottom: 20
            }}
        >

            <View
                style={{
                    backgroundColor: "#3559E0",
                    padding: 10,
                    width: "100%",
                    height: 140
                }}
            >

                <Text
                    style={{
                        color: "white",
                        fontSize: 18,
                        fontWeight: "bold",
                        textAlign: "center",
                        justifyContent: "center",
                        marginTop: 22,
                    }}
                >
                    ᖴị𝗍חҽ𝐬𝐬 ᖴ𝒓ҽɑ𝘬𝐬
                </Text>


                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20
                    }}
                >

                    <View>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            {workout}
                        </Text>

                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6
                            }} >
                            WORKOUTS
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            {calories}
                        </Text>

                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6
                            }}
                        >
                            KCAL
                        </Text>
                    </View>

                    <View>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            {minutes}
                        </Text>

                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6
                            }}
                        >
                            MINS
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >

                <Image
                    style={{
                        width: "95%",
                        height: 140,
                        marginTop: 10,
                        borderRadius: 7
                    }}
                    source={{
                        uri: "https://wallpapers.com/images/hd/planking-man-with-fitness-quote-jmw5s37citzeacr6.jpg"
                    }}
                />
            </View>

            <View>
                <Text
                    style={{
                        color: "gray",
                        fontWeight: "bold",
                        justifyContent: "center",
                        marginTop: 10,
                        textAlign: "center"
                    }}
                >
                    WORKOUTS
                </Text>
            </View>
            <FitnessCards />
        </ScrollView>
    );
};

export default Homescreen;

const styles = StyleSheet.create({});
