import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable onPress={() => navigation.navigate("Workout", {
          image: item.image,
          excercises: item.excersises,
          id: item.id,
        })} style={{ alignItems: "center", justifyContent: "center", margin: 10 }} key={key}>
          <Image
            style={{
              flex: 1,
              width: "100%",
              height: 140,
              borderRadius: 7
            }}
            source={{
              uri: item.image
            }}

          />

          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 12,
              top: 15
            }}>{item.name}</Text>

          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 20
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;
