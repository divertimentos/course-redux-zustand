import { useSelector } from "react-redux";

export function TodoList() {
  const todos = useSelector((store) => {
    return store.todo;
  });

  console.dir(todos);

  return (
    <ul>
      {todos.map((todo: string) => {
        return <li key={todo}>{todo}</li>;
      })}
    </ul>
  );
}
