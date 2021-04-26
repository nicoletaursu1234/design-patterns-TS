import Button from "./Button.js";
import Mediator from "./Mediator.js";
import Text from "./Text.js"

export default () => {
  const text = new Text();
  const button = new Button();

  const mediator = new Mediator(text, button);

  text.print('Seminar');

  console.log('\n')

  text.print('Lab')
}