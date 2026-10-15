import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function WeekDetailScreen() {
  interface Week {
    id: number;
    topic: string;
  }
  const { id } = useLocalSearchParams();
  const weeks = require("../../../data/weeks.json");
  const week = weeks.find((week: Week) => week.id === Number(id));

  if (!week) {
    return (
      <View style={styles.container}>
        <Text>Week not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Week {week.id}: {week.topic}
      </Text>
      <Text style={styles.content}>
        This is the content for Week {week.id}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
  },
});
