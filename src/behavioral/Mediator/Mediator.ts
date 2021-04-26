import Text from "./Text.js";
import Button from "./Button.js";

export default class Mediator {
  private Text: Text;
  private Button;

  constructor(text, button) {
    this.Text = text;
    this.Text.setMediator(this);
    this.Button = button;
    this.Button.setMediator(this);
  }

  dispatch = (sender: Object, event: String): void => {
    if (sender instanceof Text) {
      switch (event) {
        case "Seminar":
          this.Button.draw("green");
          break;
        case "Lab":
          this.Button.draw("purple");
          break;
        case "Lecture":
          this.Button.draw("blue");
          break;
        default:
          return;
      }
    }

    if (sender instanceof Button) {
      switch (event) {
        case "green":
          this.Text.print("Seminar painted in green");
          break;
        case "purple":
          this.Text.print("Lab painted in purple");
          break;
        default:
          this.Text.print("Lecture painted in blue");
      }
    }
  };
}
