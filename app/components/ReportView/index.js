import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";

const ReportView = (props) => {
  const [data, setData] = useState(props.route.params.item);
  const [state, setState] = useState({ text: "" });

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{data.name.es}</Text>
      <Text style={styles.subtitle}>
        Please provide a brief description of the issue.
      </Text>

      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type here, 200 characteres or 29 words allowed."
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>

      <View
        style={{
          flex: 2,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => props.navigation.goBack()}
        >
          <Text style={{ color: "#CB2038", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() =>
            props.navigation.navigate("Map", {
              item: "k",
            })
          }
        >
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportView;
