import { Todo } from "../App";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  toggledTodo: (selectedTodo: Todo) => void;
  removeTodo: (selectedTodo: Todo) => void;
}

const Todos = ({ todos, toggledTodo, removeTodo }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
            key={todo.text}
            todo={todo}
            toggledTodo={toggledTodo}
            removeTodo={removeTodo}
        />
      ))}
    </>
  );
};

export default Todos;
