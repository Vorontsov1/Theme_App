import { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import SettingScreen from './src/screens/SettingScreen';
import DarkTheme from './src/theme/DarkTheme';
import DefaultTheme from './src/theme/DefaultTheme';
import {AppContext} from './src/context/AppContext';






const Stack = createNativeStackNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const appContext = useMemo(() => {
    return {
      isDarkTheme,
      setIsDarkTheme
    }
  });

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <StatusBar style={isDarkTheme ? "light" : "gray"} />
      <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
        <AppContext.Provider value={appContext}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Setting" component={SettingScreen} />
          </Stack.Navigator>
        </AppContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
