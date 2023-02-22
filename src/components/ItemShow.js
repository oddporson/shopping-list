import { useState } from "react";

import ItemEdit from "./ItemEdit";

function ItemShow({ item, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  // trigger the delete button
  const handleDeleteClick = () => {
    onDelete(item.id);
  };

  // triggers the edit button
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  // handleSubmit function when user save a new item
  const handleSubmit = () => {
    setShowEdit(false);
  };

  // display itemEdit component when user click the edit button
  let content = <h3>{item.title}</h3>;
  if (showEdit) {
    content = <ItemEdit onEdit={onEdit} item={item} onSubmit={handleSubmit} />;
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
