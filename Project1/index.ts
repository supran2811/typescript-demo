import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/2";

interface TODOS {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const data = response.data as TODOS;

  const { id, title, completed } = data;
  printLog(id, title, completed);
});

function printLog(id: number, title: string, completed: boolean) {
  console.log(`
  id is ${id},
  title is ${title}
  completed is ${completed}
  `);
}
