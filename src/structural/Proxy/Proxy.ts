import Todos from "./Todos";
import TodosData from "./TodosData";

export default class Proxy {
  readonly todosData: TodosData;
  readonly cache = [
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
  ];

  constructor(todosData: TodosData) {
    this.todosData = todosData;
  }

  getTodoByTitle = async (title: string) => {
    const foundInCache = this.cache.find((todo) => todo.title === title);

    if (!foundInCache) {
      console.log("No todo found in cache, fetching...");
      const todo = await this.todosData.getTodoByTitle(title);
      console.log(`todo`, todo);
      this.cache.push(todo);

      return todo;
    } else {
      console.log("Todos found in cache");

      return foundInCache;
    }
  };
}
