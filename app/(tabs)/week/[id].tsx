import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

interface Project {
  id: number;
  topic: string;
}

const projects: Project[] = require("../../../data/weeks.json");

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <View style={styles.container}>
        <Text>Project not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Project {project.id}: {project.topic}
      </Text>
      <Text style={styles.content}>
        This is the content for Project {project.id}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  content: { fontSize: 18 },
});
