import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
//
import FavoriteScreen from '../screens/FavoriteScreen';
//
import FilterScreen from '../screens/FilterScreen';

import { Ionicons } from '@expo/vector-icons';
//Navigator 5 API
const Stack = createStackNavigator();

const MealsNavigator = () => {
    return(
         
            <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center'}, }}> 
                <Stack.Screen name="categories" component={CategoriesScreen} />
                <Stack.Screen name="mealsCategory" component={CategoryMealsScreen}  options={ props => ({ title: props.route.params.title })} />
                <Stack.Screen name="mealItems" component={MealDetailScreen}  options={props => ({title: props.route.params.title })} />
            </Stack.Navigator> 
        
    );
} //options={{title: 'Meals Categories'}} 

// now create a stack navigator for favoritescreen
const FavoriteStackNavigator = () => {
    return(  
        <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center'}, }}> 
            <Stack.Screen name="favoriteScreen" component={FavoriteScreen} /> 
            <Stack.Screen name="mealItems" component={MealDetailScreen}  options={props => ({title: props.route.params.title })} />
        </Stack.Navigator> 
);
}


//create bottom tab navigator
const  Tab = createBottomTabNavigator();

//here we're going to create with 2 tabs --> 1. Meal -> to control al the stack screen, and 2. FavoriteScreen - to display the favorite food items 
//MealsNavigatore is "nested" in the Tab - Meals Navigator
const MealsFavTabNavigator = () => {
    return (
          <Tab.Navigator  tabBarOptions={{activeTintColor: '#e91e63', backGroundColor: '#f4511e' }}>
            <Tab.Screen name="Meals" component={MealsNavigator}  options={{ tabBarLabel: "Meals" ,tabBarIcon: (tabInfo)=>(<Ionicons name="ios-restaurant" color='#e91e63' /> )  }} />
            <Tab.Screen  name="Favorite" component={FavoriteStackNavigator}   options={{ tabBarLabel: "Favorite" , tabBarIcon: (tabInfo)=>(<Ionicons name="ios-star" color='#e91e63' /> )  }} />
          </Tab.Navigator>
    );
}

//create filter stack navigator
const StackFilter = createStackNavigator();
const FilterNavigator = () => {
    return(
            <StackFilter.Navigator screenOptions={{ headerStyle: {backgroundColor: '#f4511e'}, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center'}, }}>
                <StackFilter.Screen name="Filters" component={FilterScreen} options={{title: 'Filter'}} />
            </StackFilter.Navigator>
    );
}

//screen navigators(MealNavigators) will be nested in Tab navigator(MealsFavTabNavigator) which will be finally nested in DrawerNavigation(MainNavigator)
const Drawer = createDrawerNavigator();

const MainNavigator =() =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerStyle={{backgroundColor: 'white'  }}  >  
                <Drawer.Screen name="MealsFavs" component={MealsFavTabNavigator} options={{title: 'Meals' }}   />
                <Drawer.Screen name="Filters" component={FilterNavigator} />
            </Drawer.Navigator> 
        </NavigationContainer>
    );

}


export default MainNavigator;

// you can set default navigation options and styles using screenOptions in react-native 5




