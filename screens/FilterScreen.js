import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
//
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
//
import { useDispatch } from 'react-redux';
import {setFilters} from '../store/actions/meals';
//creating filterswitch component outside---if u want u can create inside also--video 145
const FilterSwitch = props =>{
    return(
        <View style={styles.filterContainer}> 
        <Text>{props.label}</Text>
        <Switch  trackColor={{true: '#f4511e'}} thumbColor='#f4511e' 
         value={props.state} onValueChange={props.onChange}   
        />
    </View>
    );
}
//main component
const FilterScreen = props => {  

//updating the FavoriteScreenOptions Dynamically 
   props.navigation.setOptions({
    headerTitle: 'Fitlered Meals Item',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={()=>{props.navigation.toggleDrawer();} } />
           </HeaderButtons>), 
     headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Save" iconName="ios-save" onPress={saveAppliedFilters} />
           </HeaderButtons>), 
  }); 


//redux dispatch to trigger the actions
const dispatch = useDispatch();

// useState to store value on change the filter
const [isGlutenFree, setIsGluttenFree] = useState(false);
const [isLactosFree, setIsLactosFree] = useState(false);
const [isVegan, setIsVegan] = useState(false);
const [isVegetarian, setIsVegetarian] = useState(false);
//creating a function to store the value when triggered by save-menu
const saveAppliedFilters = () => {
    const appliedFilters ={ 
        glutenFree: isGlutenFree,
        lactoseFree: isLactosFree,
        vegan: isVegan,
        isVegetarian: isVegetarian,
    }
    dispatch(setFilters(appliedFilters));

}
// main
    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue=>setIsGluttenFree(newValue)}  />
            <FilterSwitch label='Lactos-free' state={isLactosFree} onChange={newValue=>setIsLactosFree(newValue)}  />
            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue=>setIsVegan(newValue)}  />
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue=>setIsVegetarian(newValue)}  />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
        
    },
    filterContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',

    }

});

export default FilterScreen;