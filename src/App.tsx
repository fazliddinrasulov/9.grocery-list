import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

type Item = {
  name: string;
  completed: boolean;
  id: string;
};

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  return list ? JSON.parse(list) : [];
};

const setLocalStorage = (items: Item[]) => {
  localStorage.setItem("list", JSON.stringify(items));
};

function App() {
  const value = getLocalStorage();

  const [items, setItems] = useState<Array<Item>>(value);

  const addItem = (itemName: string) => {
    const newItem: Item = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    toast.success("seccessfully added");

    setItems(newItems);
    setLocalStorage(newItems);
  };
  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => {
      return item.id !== itemId;
    });
    toast.success("seccessfully deleted");
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const editItem = (itemId: string) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    toast.success("seccessfully edited");
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className="section-center">
      <ToastContainer position="top-center" autoClose={1500} />
      <Form addItem={addItem} />
      <Items removeItem={removeItem} items={items} editItem={editItem} />
    </section>
  );
}

export default App;
