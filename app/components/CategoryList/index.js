import React, {  useState } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import styles from "./styles";

const CategoryList = (props) => {
  const [categories, setCategories] = useState(props.data.categories);

  let categoryAux = [];

  for (var prop in categories) {
    categoryAux.push(categories[prop]);
  }

  const alertItemName = (item) => {
    props.navigation.navigate("Details", {
      item: item,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Text style={styles.title}>Category</Text>
      <Text style={styles.subtitle}>Select an option to continue</Text>
      {categoryAux.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => alertItemName(item)}
        >
          <Text style={styles.text}>{item.name.es}</Text>
        </TouchableOpacity>
      ))}
      <View
        style={{
          flex: 2,
          justifyContent: 'center',

        }}
      >
        <TouchableOpacity style={styles.backButton}>
          <Text style={{ color: "#CB2038", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} >
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoryList;
