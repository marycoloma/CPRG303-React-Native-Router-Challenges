import { Stack } from "expo-router";

export default function WeekLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="index" options={{ title: "Projects" }} />
      <Stack.Screen name="[id]" options={{ title: "Project Details" }} />
    </Stack>
  );
}
