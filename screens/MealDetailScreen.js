import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button , Image, ScrollView} from 'react-native';

//import meals from REDUX-STORE AND GET RID OF THE MEALS from dummy-data
import { useSelector, useDispatch } from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';
//

import { MEALS } from '../data/dummy-data';
//
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {  
    const mealId = props.route.params.mealId; 

//to take/access the meals from the REDUX-STORE // useSelector takes argument as function
const availableMeals = useSelector(state => state.meals.meals);
// REDUX DISPATCH & ACTIONS
    const dispatch = useDispatch();
    const toggleFavoriteHandler =  () => {
        dispatch(toggleFavorite(mealId));
    };


// to show the favorite icons favorite or not -----
const isCurrentFavoriteMeals = useSelector(state=>state.meals.favoriteMeals.some(meal=> meal.id === mealId));
//and then we'll check this item is part of favoriteMeals or not



   //setting the header button in the meal detail
   const { navigation } = props;
    navigation.setOptions({
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                         <Item title="Favorite" iconName={isCurrentFavoriteMeals? 'ios-star': 'ios-star-outline'} onPress={toggleFavoriteHandler} />
                            </HeaderButtons>), 
  }); 

   
//
  
//
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);


    return ( 
    <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
        <View style={styles.details} >
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity}</Text>
            <Text>{selectedMeal.affordability}</Text>         
        </View>
        <Text style={styles.title}>Ingredients</Text>
        <View style={styles.itemContainer}>{selectedMeal.ingredients.map(ingredients => <Text key={ingredients} style={styles.item}>{ingredients}</Text>)}</View>
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => <Text key={step} style={styles.item}>{step}</Text>)}
    </ScrollView>
    );

};

/*
MealDetailScreen.navigationOptions = props =>{
props.navigation.setOptions({
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                         <Item title="Favorite" iconName="ios-star" onPress={()=>{console.log('mark as Favorite');} } />
                            </HeaderButtons>), 
  }); 

}
*/

const styles = StyleSheet.create({
image: {
    width: '100%',
    height: 200

},
details:{
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',

},
title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',

},
itemContainer:{
    flex: 1,
    padding: 10,
    
    
},
item: { 
    fontSize: 16,
    height: 30,
    marginHorizontal: 20,
    marginVertical: 10,  
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    
}

});




export default MealDetailScreen;