import { useState } from "react";

function ItemEdit() {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <form>
      <label>new title</label>
      <input value={title} onChange={handleChange} />
    </form>
  );
}

export default ItemEdit;
