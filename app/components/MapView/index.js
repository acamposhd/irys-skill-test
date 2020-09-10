import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import {  MapView } from "react-native-maps";
import styles from "./styles";

const MapV = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>adasdas</Text>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapV;
