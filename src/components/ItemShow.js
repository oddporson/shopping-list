function ItemShow({ item, onDelete }) {
  const handleDelete = () => {
    console.log("delete", item.id);
    onDelete(item.id);
  };

  return (
    <div>
      <p>{item.title}</p>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default ItemShow;
