import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";
// import { FaPlusSquare } from "react-icons/fa";

const AddItem = ({ newItems, setNewItems, HeandlSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={HeandlSubmit}>
      <input
        type="text"
        autoFocus
        ref={inputRef}
        id="addForm"
        placeholder="Добавить в список"
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
      />
      {/* <FaPlusSquare
        role="button"
        type="submit"
        tabIndex="1"
        aria-label="Add item"
        ref={inputRef}
        id="addForm"
        onClick={() => inputRef.current.focus()}
      /> */}

      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
