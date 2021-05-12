import axios from "axios";
import Todos from "./Todos.js";

export default class TodosData {
  getData = async (): Promise<[]> => 
 await axios
  .get("https://jsonplaceholder.typicode.com/todos")

  todos: any = this.getData();

  getTodoByTitle = async (title: string) => {
    const todos = await this.todos;
    return todos.find((todo) => todo.title === title);
  };
}
