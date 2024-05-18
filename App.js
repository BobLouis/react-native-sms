import React, { useContext } from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PhoneAuth from "./phone/PhoneAuth";
import Home from "./home/Home";
import DataContext from "./data/data-context";
import styles from "./AppStyles";

const Stack = createNativeStackNavigator();

function App() {
  const dataCtx = useContext(DataContext);
  const isAuthChecked = dataCtx.isAuthChecked;
  const isDataFetched = dataCtx.isDataFetched;

  if (!isAuthChecked) return null;

  return (
    <View style={styles.container}>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        {isDataFetched ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            
          </>
        ) : (
          <Stack.Screen name="Login" component={PhoneAuth} />
        )}
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator> */}
      {/* <Home /> */}
      <Text>Home</Text>
    </View>
  );
}

export default App;