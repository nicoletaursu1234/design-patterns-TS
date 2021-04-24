import INutrientToCaloriesAdapter from "./INutrientToCaloriesAdapter";
import CaloriesByGrams from './CaloriesByGrams.js';

export default class NutrientToCaloriesAdapter implements INutrientToCaloriesAdapter {
  nutritionInfo = new CaloriesByGrams();

  public convertAndPrint = (nutrient): string => {
    const quantity = nutrient.quantity * 1000
    return this.nutritionInfo.calculate({...nutrient, quantity, unit: 'grams' });
  };
}
