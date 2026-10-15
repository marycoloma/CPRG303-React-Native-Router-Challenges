import { Stack } from "expo-router";

export default function WeekLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ title: "Project Details", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
