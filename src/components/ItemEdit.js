import { useState } from "react";

function ItemEdit({ item, onSubmit }) {
  const [title, setTitle] = useState(item.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item.id, title);
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
