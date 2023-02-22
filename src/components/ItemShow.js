import { useState } from "react";

import ItemEdit from "./ItemEdit";

function ItemShow({ item, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  const handleEditClick = () => {
    console.log("edit clicked");
    setShowEdit(!showEdit);
  };

  let content = <h3>{item.title}</h3>;
  if (showEdit) {
    content = <ItemEdit />;
  }

  return (
    <div>
      <div>{content}</div>
      <button onClick={handleEditClick}>edit</button>
      <button onClick={handleDeleteClick}>delete</button>
    </div>
  );
}

export default ItemShow;
