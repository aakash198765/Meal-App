import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

//
import { CATEGORIES, MEALS } from '../data/dummy-data';
//
import MealItem from '../components/MealItem';
//
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

//import meals from REDUX-STORE AND GET RID OF THE MEALS from dummy-data
import { useSelector } from 'react-redux';
//

//FavoriteScreen
const FavoriteScreen = (props) => { 

//updating the FavoriteScreenOptions Dynamically 
props.navigation.setOptions({
    headerTitle: 'Your Favorites',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={()=>{props.navigation.toggleDrawer();} } />
           </HeaderButtons>), 
  });

  //to take/access the meals from the REDUX-STORE // useSelector takes argument as function
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  
  if(favMeals.length === 0 || !favMeals){
      return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                 <Text>No favorite meals</Text>
                 </View> );
  }
 
    //function to render Meal Items
    const renderMealItem = itemData =>{
        return( 
                //we can writing this function in a separate file "MealItem.js" and rendering it & just calling it here, so it will be easy for us to render and design there & code will be look clean
               <MealItem image={itemData.item.imageUrl} title={itemData.item.title} duration={itemData.item.duration} complexity={itemData.item.complexity} affordability={itemData.item.affordability}  
                                onSelectMeal={()=>{props.navigation.navigate('mealItems', {mealId: itemData.item.id, title: itemData.item.title})}} />
        );
    };

//Main return() rendering function
    return (
        <View style={styles.screen}>
           <FlatList 
           keyExtractor={(item, index) => item.id}
           data={favMeals}
           renderItem={renderMealItem}
           style={{width:'100%'}} //style
           />
        </View>
    );
}

const styles=StyleSheet.create({
    screen: {
        padding: 5
    
        
    },
});



export default FavoriteScreen;