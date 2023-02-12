import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";

import HomePage from "./HomePage";           //Home Page
import AnswerPage from "./AnswerPage";       //Answers Page
import FiltersPage from "./FiltersPage";     //Filters Page
import WaitingPage from "./WaitingPage";     //Loading Page
import WebViewComp from "./WebViewComp";     //Web View Page


const Stack = createNativeStackNavigator();


const App = () => {
  useEffect(()=> {
    SplashScreen.hide();
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{title:"Home", 
        headerStyle:styles.headStyle ,
        headerShown:true}} 
        />
        <Stack.Screen
        name="FiltersPage"
        component={FiltersPage}
        options={{title:"Filter", 
        headerStyle:styles.headStyle ,
        headerShown:true}} 
        />
        <Stack.Screen
        name="AnswerPage"
        component={AnswerPage}
        options={{title:"Answer", 
        headerStyle:styles.headStyle ,
        headerShown:true}} 
        />
        <Stack.Screen
        name="WaitingPage"
        component={WaitingPage}
        options={{title:"Loading", 
        headerStyle:styles.headStyle ,
        headerShown:false}} 
        />
        <Stack.Screen
        name="WebViewComp"
        component={WebViewComp}
        options={{title:"stack Overflow", 
        headerStyle:styles.headStyle ,
        headerShown:true}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headStyle: {
    backgroundColor: "gold",  //#AAE3E2
    borderBottomColor: "gold",
    borderBottomWidth: 0,
  },
})

export default App;