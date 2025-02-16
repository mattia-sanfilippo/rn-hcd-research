import { SafeAreaView, useColorScheme, Text } from "react-native"

const DarkModeScreen = () => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaView>
            <Text style={{ color: isDarkMode ? "white" : "black" }}>Dark Mode Screen</Text>
        </SafeAreaView>
    );
};

export default DarkModeScreen;