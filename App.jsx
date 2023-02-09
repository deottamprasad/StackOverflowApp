import React, { useEffect } from "react";
import {} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "react-native-splash-screen";

import QuestionsList from "./QuestionsList";
import AnswerPage from "./AnswerPage";
import FiltersPage from "./FiltersPage";
import WaitingPage from "./WaitingPage";
import WebViewComp from "./WebViewComp";


const Stack = createNativeStackNavigator();


const App = () => {
  useEffect(()=> {
    SplashScreen.hide();
  })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FilterPage">
        <Stack.Screen
        name="QuestionsList"
        component={QuestionsList}
        options={{title:"StackOverflow", headerShown:true}} 
        />
        <Stack.Screen
        name="FiltersPage"
        component={FiltersPage}
        options={{title:"FiltersPage", headerShown:true}} 
        />
        <Stack.Screen
        name="AnswerPage"
        component={AnswerPage}
        options={{title:"AnswerPage", headerShown:true}} 
        />
        <Stack.Screen
        name="WaitingPage"
        component={WaitingPage}
        options={{title:"WaitingPage", headerShown:false}} 
        />
        <Stack.Screen
        name="WebViewComp"
        component={WebViewComp}
        options={{title:"stack Overflow", headerShown:true}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;