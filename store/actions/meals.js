//START SETTING  REDUX ACTIONS which typically starts by setting up some unique identifiers
//and store in contants that will be "TOGGLE_FAVORITE"
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (id) => {
    return { type: TOGGLE_FAVORITE, mealId: id}; //it will be send as action 
};

export const setFilters = filterSetting => {
    return { type: SET_FILTERS, filters: filterSetting} ;
}