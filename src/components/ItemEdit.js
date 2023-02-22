import { useState } from "react";

function ItemEdit({ item, onEdit, onSubmit }) {
  const [title, setTitle] = useState(item.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(item.id, title);
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>new title</label>
      <input value={title} onChange={handleChange} />
      <button>save</button>
    </form>
  );
}

export default ItemEdit;
