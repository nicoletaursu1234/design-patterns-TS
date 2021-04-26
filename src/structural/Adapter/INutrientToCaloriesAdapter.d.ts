import CaloriesByGrams from "./CaloriesByGrams.js";
import Nutrient from "./Nutrient.js";

export default interface INutrientToCaloriesAdapter {
  nutritionInfo: CaloriesByGrams;
  convertAndPrint: (nutrient: Nutrient) => string;
}