import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BiTrash } from "react-icons/bi";
import { MdDownloadDone } from "react-icons/md";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)} />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          {" "}
          <AiFillEdit />{" "}
        </button>
        {item.completed === false && (
          <button onClick={() => completeTodo(item.id)}>
            <MdDownloadDone />
          </button>
        )}
        <button onClick={() => removeTodo(item.id)}>
          {" "}
          <BiTrash />
        </button>{" "}
      </div>
      {item.completed && (
        <span className="completed">
          <IoCheckmarkDoneSharp />
        </span>
      )}
    </li>
  );
};

export default TodoItem;
