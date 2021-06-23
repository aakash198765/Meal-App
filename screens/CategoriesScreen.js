import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
//import dummy-data to use in for grid layout
import { CATEGORIES } from '../data/dummy-data';
//
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


export default function CategoriesScreen (props) { 


    //updating the FavoriteScreenOptions Dynamically 
    props.navigation.setOptions({
        headerTitle: 'Meals Categories',
        headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={()=>{props.navigation.toggleDrawer();} } />
               </HeaderButtons>), 

      });


    //function to renderItem
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> props.navigation.navigate('mealsCategory', {categoryId: itemData.item.id, title: itemData.item.title}) } style={{...styles.gridItem, backgroundColor: itemData.item.color}}>
                 <View >
                     <Text style={styles.title} numberOfLines={2}>
                        {itemData.item.title}
                     </Text>
                 </View>
            </TouchableOpacity>
         );
       }

//main rendering component
    return (
        //numColumns prop will give grid layout
        //new version of react-native, need not to use keyExtractor
        <FlatList 
        keyExtractor={(item, index)=> item.id}
        data={CATEGORIES}
        renderItem={renderGridItem} 
        numColumns={2} 
        />
    );
}

const styles = StyleSheet.create({
    gridItem: {
            flex: 1,
            margin: 15,
            height: 150,
            borderRadius: 10,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: {width: 0, heigh: 2},
            shadowRadius: 10,
            elevation: 3,
            padding: 15,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 23,
        textAlign: 'right'

    }
});

