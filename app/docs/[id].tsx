import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

interface Doc {
  id: string;
  title: string;
  content: string;
}

const docs: Doc[] = require("../../data/docs.json");

export default function DocDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const doc = docs.find((d) => d.id === id);

  if (!doc) {
    return (
      <View style={styles.container}>
        <Text>Document not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{doc.title}</Text>
      <Text style={styles.content}>{doc.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  content: { fontSize: 18 },
});
