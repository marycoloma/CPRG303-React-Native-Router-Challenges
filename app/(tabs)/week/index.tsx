import { FlatList, Pressable, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const projects = require("../../../data/weeks.json");

export default function ProjectsScreen() {
  const router = useRouter();

  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={<Text style={styles.title}>Projects</Text>}
      contentContainerStyle={styles.content}
      renderItem={({ item }) => (
        <Pressable
          style={styles.row}
          onPress={() =>
            router.push({
              pathname: "/week/[id]",
              params: { id: item.id },
            })
          }
        >
          <Text style={styles.rowText}>
            Project {item.id}: {item.topic}
          </Text>
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, gap: 10 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  row: { padding: 16, borderWidth: 1, borderColor: "#999", borderRadius: 8 },
  rowText: { fontSize: 18 },
});
