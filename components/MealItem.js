import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity activeOpacity={0.8} onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage} >
                       <Text style={styles.title} numberOfLines={1} >{props.title}</Text> 
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetail}} >
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View> 
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
      
        
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',

    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between'

    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }

    
});

export default MealItem;