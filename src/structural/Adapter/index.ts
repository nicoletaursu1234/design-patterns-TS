import CaloriesByGrams from "./CaloriesByGrams.js";
import Nutrient from "./Nutrient.js";
import NutrientToCaloriesAdapter from "./NutrientToCaloriesAdapter.js";

export default () => {
  const protein: Nutrient = new Nutrient({ type: 'protein', quantity: 0.03, unit: 'kilos' });
  const fat = new Nutrient({ type: 'fat', quantity: 30, unit: 'grams' });

  const caloriesByGrams = new CaloriesByGrams()
  const caloriesByKilos = new NutrientToCaloriesAdapter()
  
  console.log(protein)
  console.log(caloriesByGrams.calculate(protein))

  console.log(fat)
  console.log(caloriesByGrams.calculate(fat))

  console.log(protein)
  console.log(caloriesByKilos.convertAndPrint(protein))
}