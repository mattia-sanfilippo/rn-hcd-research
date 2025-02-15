import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";

const AccessibilityScreen = () => {
    return (
        <SafeAreaView>
            <Link href="/accessibility/screen-reader"><Text>Screen Reader</Text></Link>
            <Link href="/accessibility/semantic-elements"><Text>Semantic Elements</Text></Link>
            <Link href="/accessibility/dynamic-text-scaling"><Text>Dynamic Text Scaling</Text></Link>
            <Link href="/accessibility/keyboard-navigation"><Text>Keyboard Navigation</Text></Link>
            <Link href="/accessibility/focus-management"><Text>Focus Management</Text></Link>
        </SafeAreaView>
    );
};

export default AccessibilityScreen;