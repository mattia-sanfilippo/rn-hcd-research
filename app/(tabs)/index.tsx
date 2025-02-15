import { Link } from 'expo-router';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Link href="/accessibility"><Text style={styles.link}>Accessibility</Text></Link>
        <Link href="/theming"><Text style={styles.link}>Theming</Text></Link>
        <Link href="/user-feedback"><Text style={styles.link}>User Feedback Handling</Text></Link>
        <Link href="/touch-gestures"><Text style={styles.link}>Touch Gestures</Text></Link>
        <Link href="/internationalization"><Text style={styles.link}>Internationalization and Localization</Text></Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
    padding: 16,
  },
  link: {
    color: 'blue',
  },
});
