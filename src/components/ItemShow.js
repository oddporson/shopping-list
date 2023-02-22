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

  // unhide the ItemEdit component and passed in editItemById function
  // collapsing two function in one
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  // display itemEdit component when user click the edit button
  let content = <h3>{item.title}</h3>;
  if (showEdit) {
    content = <ItemEdit item={item} onSubmit={handleSubmit} />;
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
