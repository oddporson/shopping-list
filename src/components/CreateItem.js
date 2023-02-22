import { useState } from "react";

function CreateItem({ onSubmit }) {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem("");
    onSubmit(item);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Item</label>
        <input onChange={handleChange} value={item} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateItem;
