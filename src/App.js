import { useState, useEffect } from "react";
import axios from "axios";
import CreateItem from "./components/CreateItem";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  // get all items from db
  const fetchItems = async () => {
    const response = await axios.get("http://localhost:3001/lists");
    setItems(response.data);
  };

  // only render once when fetchItems is called.
  useEffect(() => {
    fetchItems();
  }, []);

  // edit item
  const editItemById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/lists/${id}`, {
      title: newTitle,
    });

    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });
    setItems(updatedItems);
  };

  // delete an item off from the shopping list
  const deleteItemById = async (id) => {
    await axios.delete(`http://localhost:3001/lists/${id}`);

    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updatedItems);
  };

  // add an item to the shopping list
  const createItem = async (item) => {
    const response = await axios.post("http://localhost:3001/lists", {
      title: item,
    });

    const updatedItems = [...items, response.data];
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <CreateItem onSubmit={createItem} />
      <ItemList items={items} onDelete={deleteItemById} onEdit={editItemById} />
    </div>
  );
}

export default App;
