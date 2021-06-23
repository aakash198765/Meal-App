import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
//
import MealsFavTabNavigator from './components/MealsNavigator';
import MainNavigator from './components/MealsNavigator';
//
// importing for redux
// combineReducers combine all the reducers in 1
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';
//combineReducers will merge the all the reducer in one
// here we've only one reducer // it takes arguments as object
//we can access the mealsReducer and use state values -- using "meals"
const rootReducer = combineReducers({
  meals: mealsReducer
});
//to create store we need argument rootReducer/reducers
//we need to create store to manage the state
const store = createStore(rootReducer);
//we created the "store"
//now to "provide" the App to access to the store we need "Provider"


const fetchFonts = props => {
  return Font.loadAsync({
     'open-sans-regular' : require('./assets/fonts/OpenSans-Regular.ttf'),
     'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() { 
  //state for fonts
  const [fontLoaded, setFontLoaded] = useState(false);

//AppLoading
if(!fontLoaded){
  return (<AppLoading 
    startAsync={fetchFonts}
    onFinish={()=>setFontLoaded(true)}
    onError={(err)=> console.log(err)}
  />
  );
}

  return ( 
    <Provider store={store}>
    <MainNavigator />
    </Provider>
  );

} 



