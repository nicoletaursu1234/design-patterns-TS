import INutrientProps from "./INutrientProps";
export default class Nutrient {
  type;
  quantity;
  unit;

  constructor({ type, quantity, unit }: INutrientProps) {
    this.type = type;
    this.quantity = quantity;
    this.unit = unit;
  }
}
