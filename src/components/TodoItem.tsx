import { Todo } from "../App";

interface Props {
  todo: Todo;
  toggledTodo: (selectedTodo: Todo) => void;
  removeTodo: (selectedTodo: Todo) => void;
}

const TodoItem = ({ todo, toggledTodo, removeTodo }: Props) => {
  return (
    <article>
      <label htmlFor="todo">
        <input
          type="checkbox"
          id="todo"
          checked={todo.completed}
          onChange={() => toggledTodo(todo)}
        />
        {todo.text}
      </label>
      <button
        onClick={() => removeTodo(todo)}
        type="button"
        className="contrast"
      >
        Remove
      </button>
    </article>
  );
};

export default TodoItem;
