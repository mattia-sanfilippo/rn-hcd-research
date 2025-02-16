import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";

const InternationalizationScreen = () => {
    return (
        <SafeAreaView>
            <Link href="/internationalization/multi-language-support"><Text>Multi-language support</Text></Link>
            <Link href="/internationalization/rtl-support"><Text>RTL support</Text></Link>
            <Link href="/internationalization/formatting-values"><Text>Formatting values</Text></Link>
        </SafeAreaView>
    );
};

export default InternationalizationScreen;