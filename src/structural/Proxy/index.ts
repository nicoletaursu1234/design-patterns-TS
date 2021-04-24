import TodosData from "./TodosData.js";
import Proxy from "./Proxy.js";

export default () => {
  const todos = new Proxy(new TodosData());
  const data = todos.getTodoByTitle('quis ut nam facilis et officia qui');

  console.log(data)
};
