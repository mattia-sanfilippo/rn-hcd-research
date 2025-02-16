import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { Link } from "expo-router";

const TouchGesturesScreen = () => {
    return (
        <SafeAreaView>
            <Link href="/touch-gestures/basic-tap"><Text>Basic taps</Text></Link>
            <Link href="/touch-gestures/swipe"><Text>Swipe</Text></Link>
            <Link href="/touch-gestures/drag-drop"><Text>Drag & Drop</Text></Link>
            <Link href="/touch-gestures/pinch-zoom"><Text>Pinch to Zoom</Text></Link>
        </SafeAreaView>
    );
};

export default TouchGesturesScreen;