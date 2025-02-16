import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";

const ThemingScreen = () => {
    return (
        <SafeAreaView>
            <Link href="/theming/theming-support">Theming Support</Link>
            <Link href="/theming/dark-mode">Dark Mode</Link>
            <Link href="/theming/styling-flexibility">Styling Flexibility</Link>
            <Link href="/theming/platform-adaptation">Platform Adaptation</Link>
        </SafeAreaView>
    );
};

export default ThemingScreen;