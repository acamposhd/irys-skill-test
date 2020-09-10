import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Data from "./app/data/heyirys_covid.json";
import CategoryList from "./app/components/CategoryList/index";
import SubCategoryList from "./app/components/SubCategoryList/index";
import ReportView from "./app/components/ReportView/index";
import MapView from "./app/components/MapView/index";
import styles from './styles';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
let options={ title: 'COVID-19 Support', headerTitleAlign:'center', cardStyle: { backgroundColor:"#F6F2FF" }};
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={options}>
        {(props) => <CategoryList {...props} data={Data} />}
        </Stack.Screen>
        <Stack.Screen name="Details" options={options}>
        {(props) => <SubCategoryList {...props} data={Data} />}
        </Stack.Screen>
        <Stack.Screen name="Report" options={options}>
        {(props) => <ReportView {...props} data={Data} />}
        </Stack.Screen>
        <Stack.Screen name="Map" options={options}>
        {(props) => <MapView {...props} data={Data} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
