import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

//import meals from REDUX-STORE AND GET RID OF THE MEALS from dummy-data
import { useSelector } from 'react-redux';
//

import { CATEGORIES, MEALS } from '../data/dummy-data';
//
import MealItem from '../components/MealItem';
//
const CategoryMealsScreen = props => { 
     //to take/access the meals from the REDUX-STORE // useSelector takes argument as function
    const availableMeals = useSelector(state => state.meals.filteredMeals);   //it takes state.meals.fliteredmeals --> meals is a key defined in APP using rootReducers, 
                                                            // instead of "meals" , we're using "filteredMeals" because initally it will display all meals because no filtered is applied

    //using this we can extract/get the values of passed parameter using key
    //this will return the ids and using which we can get the title of the meals by importing Categories Array
    const catId = props.route.params.categoryId;
    // to get the values stored in the array of objects using find()
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
 
    //to reterive meals with catId refernce from the Meal when you choose any category food item
    const displayMeals = availableMeals.filter(
        meal=> meal.categoryIds.indexOf(catId) >= 0
    );
    //function to render Meal Items
    const renderMealItem = itemData =>{
        return( 
                //we can writing this function in a separate file "MealItem.js" and rendering it & just calling it here, so it will be easy for us to render and design there & code will be look clean
               <MealItem image={itemData.item.imageUrl} title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}  
                                onSelectMeal={()=>{props.navigation.navigate('mealItems', {mealId: itemData.item.id, title: itemData.item.title})}} />
        );
    };

    return (
        <View style={styles.screen}>
           <FlatList 
           keyExtractor={(item, index) => item.id}
           data={displayMeals}
           renderItem={renderMealItem}
           style={{width:'100%'}} //style
           />
        </View>
    );
} 

const styles = StyleSheet.create({
    screen: {
        padding: 5
        
    }
});



export default CategoryMealsScreen;