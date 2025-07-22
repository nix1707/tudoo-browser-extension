import { writable } from "svelte/store";
import { TodoListItem } from "./models/TodoListItem";

export const todoItems = writable(
  JSON.parse(localStorage.getItem("todo-list")) || []
);

export const todoList = {
  addItem: function (/** @type {TodoListItem} */ item) {
    todoItems.update((items) => {
      const newItems = [item, ...items];
      localStorage.setItem("todo-list", JSON.stringify(newItems));
      return newItems;
    });
    return item;
  },

  removeItem: function (id) {
    todoItems.update((items) => {
      const newItems = items.filter((item) => item.id !== id);
      localStorage.setItem("todo-list", JSON.stringify(newItems));
      return newItems;
    });
    return true;
  },

  editItem: function (id, updatedFields) {
    todoItems.update((items) => {
      const index = items.findIndex((item) => item.id === id);
      const newItems = [...items];
      newItems[index] = { ...newItems[index], ...updatedFields };
      localStorage.setItem("todo-list", JSON.stringify(newItems));
      return newItems;
    });
    return updatedFields;
  },
};
