import { useState, ChangeEvent } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const FormAddTodo = ({ addTodo }: Props) => {
  const [text, setText] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const trimmeedText = text.trim();
    
    if (!trimmeedText) return;
    addTodo(trimmeedText);
    
    setText(""); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        Todo
        <input
          type="text"
          id="todo"
          placeholder="Ingrese todo"
          value={text}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add Todo </button>
    </form>
  );
};

export default FormAddTodo;
