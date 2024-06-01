import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#008866',        
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
         <Stack.Screen name="index" options={{ headerShown: false}} />
        <Stack.Screen name="screens/design-system/buttons/buttons-screen" options={{ headerShown: false}} />
    </Stack>
  );
}
