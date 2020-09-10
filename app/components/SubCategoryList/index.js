import React, {  useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

function SubCategoryList(props) {
  const [subCategories, setSubCategories] = useState(props.route.params.item);

  let subCategoriesAux = subCategories.subcategories
    ? subCategories.subcategories
    : undefined;

  let subCategoryArr = [];

  if (subCategoriesAux) {
    for (var prop in subCategoriesAux) {
      subCategoryArr.push(subCategoriesAux[prop]);
    }
  }

  const alertItemName = (item) => {
    props.navigation.navigate("Report", {
      item: item,
    });
  };
  return (
    <View style={{ flex: 1, justifyContent: "flex-start" }}>
      <Text style={styles.title}>{subCategories.name.es}</Text>
      {subCategoryArr.map((item, index) => (
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
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={styles.backButton}  onPress={() => props.navigation.goBack()}>
          <Text style={{ color: "#CB2038", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={{ color: "#FFFFFF", fontSize: 16 }}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SubCategoryList;
