import { createContext, PropsWithChildren, useContext, useState } from "react";
import { View, Text , StyleSheet, Button} from "react-native";

/*
 * In React Native, it is possible to create a custom theme provider using the Context API.
 * This is useful when you want to provide a theme to multiple components in your app.
 * Without using third-party libraries, this is the recommended way to implement theming in React Native.
 * https://reactnative.dev/docs/context
 */

const ThemeContext = createContext({ theme: 'light', setTheme: (theme: string) => {} });

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemingSupportScreen = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#333' : '#fff' }]}>
      <Text style={{ color: isDark ? '#fff' : '#000' }}>Current Theme: {theme}</Text>
      <Button title="Toggle Theme" onPress={() => setTheme(isDark ? 'light' : 'dark')} />
    </View>
  );
};

const WrappedThemingSupportScreen = () => {
    return (
        <ThemeProvider>
            <ThemingSupportScreen />
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default WrappedThemingSupportScreen;