import { useState } from "react";
import CreateItem from "./components/CreateItem";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  // delete an item off from the shopping list
  const deleteItemById = (id) => {
    const updatedItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(updatedItems);
  };

  // add an item to the shopping list
  const createItem = (item) => {
    const randomID = Math.floor(Math.random() * 9999);
    const updatedItems = [...items, { id: randomID, title: item }];
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <CreateItem onSubmit={createItem} />
      <ItemList items={items} onDelete={deleteItemById} />
    </div>
  );
}

export default App;
