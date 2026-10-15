import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TodoList, TodoItem } from "../../components/TodoList";
import { AddTodo } from "../../components/AddTodo";

const seed: TodoItem[] = [
  { id: 1, title: "Make Breakfast" },
  { id: 2, title: "Mark Quizzes" },
];

export default function TodoScreen() {
  const [todos, setTodos] = useState<TodoItem[]>(seed);

  function addTodo(title: string) {
    setTodos((prev) => [...prev, { id: Date.now(), title }]);
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Todo List</Text>
      <AddTodo onAdd={addTodo} />
      <TodoList list={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
});
