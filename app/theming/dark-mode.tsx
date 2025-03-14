import { SafeAreaView, useColorScheme, Text } from "react-native"

/* useColorScheme can be used to subscribe to Appearance preferences by the user.
 * The hook will reply with `dark`, `light`, or null.
*/
const DarkModeScreen = () => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <Text style={{ color: isDarkMode ? "white" : "black" }}>Dark Mode Screen</Text>
        </SafeAreaView>
    );
};

export default DarkModeScreen;