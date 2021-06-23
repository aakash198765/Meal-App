// Reducer in react is just a function

//we need dummy-data to initially intialize the state
import { MEALS } from "../../data/dummy-data";
//
import {TOGGLE_FAVORITE} from '../actions/meals';
import { SET_FILTERS } from "../actions/meals";
//we start the app--> initially meals: MEALS, filteredMeals : MEALS (BECAUSE WE'VE NOT APPLIED ANY FILTER), favortieMeals: [] (Initially we don't have any fav meals)
const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
}


//mealsReducer will receive two params - 1. state --> intial/old states snapshot 2. the action to be peformed on the inital state
//and the mealsReducer will perform the operations accordingly and will send the "updated/current state"
const mealsReducer = (state = initialState, action) =>{
    console.log(action.mealId);
    switch (action.type) {
        case TOGGLE_FAVORITE:
                const existingIndex = state.favoriteMeals.findIndex(meal=>meal.id === action.mealId);
                if(existingIndex >= 0) {
                    const updatedFavMeals = [...state.favoriteMeals];
                    updatedFavMeals.splice(existingIndex, 1);
                    return { ...state, favortieMeals: updatedFavMeals };
                } else {
                    const meal = state.meals.find(meal => meal.id === action.mealId);
                    return {...state, favortieMeals: state.favoriteMeals.concat(meal)};
                }
        case SET_FILTERS: 
                const appliedFilters = action.filters;
                const updatedFilteredMeals = state.meals.filter(meal => {
                    if(appliedFilters.glutenFree && !meal.isGlutenFree){
                        return false;
                    }
                    if(appliedFilters.lactosFree && !meal.isLacosFree){
                        return false;
                    }
                    if(appliedFilters.vegetarian && !meal.isVegeterian){
                        return false;
                    }
                    if(appliedFilters.vegan && !meal.isVegan){
                        return false;
                    }
                    return true;
                });
                return {...state, filteredMeals: updatedFilteredMeals };
        default: 
            return state;
            
    }
}

export default mealsReducer;