import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

interface Doc {
  id: string;
  title: string;
  content: string;
}

const docs: Doc[] = require("../../data/docs.json");

export default function DocsListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={docs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/docs/${item.id}`} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  title: { fontSize: 18 },
});
