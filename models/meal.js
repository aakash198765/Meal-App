class Meal{
    constructor(id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps, isGlutenFree, isVegan, isVegeterian, isLacosFree){
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegeterian = isVegeterian;
        this.isLacosFree = isLacosFree;
    }
}

export default Meal;




//it's like class prototype/blue print for the objects-here we're creating dummy data by importing "Category Class" in "dummy-data.js" to create objects of Category type