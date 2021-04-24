import INutrientProps from "./INutrientProps";

export default class CaloriesByGrams {
  calculate = ({ type, quantity, unit }): string => {
    let result;

    if (type !== "fat") {
      result = (quantity * 4).toString();
    } else {
      result = (quantity * 9).toString();
    }

    if (unit !== "grams") {
      return `Are you sure you specified grams?`;
    } else {
      return `${quantity} ${unit} of ${type} has ${result} calories.`;
    }
  };
}
