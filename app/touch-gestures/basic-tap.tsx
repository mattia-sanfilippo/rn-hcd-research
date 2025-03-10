import { Alert, Pressable, View, Text, StyleSheet } from "react-native"
import { Gesture, GestureDetector } from "react-native-gesture-handler";

/**
 * Taps and long press are handled by react native, but the double tap is a bit tricky to implement.
 * I decided to use react-native-gesture-handler (external dependency) to get a more stable support.
 */
const BasicTapScreen = () => {

    const doubleTap = Gesture.Tap().maxDuration(250).numberOfTaps(2).onStart(() => {
        console.log("Double tap detected");
    });

    return (
        <View style={styles.container}>
            <Pressable onPress={() => Alert.alert("Single tap detected")} style={styles.pressable}>
                <Text>Single Tap</Text>
            </Pressable>
            <Pressable onLongPress={() => Alert.alert("Long tap detected")} style={styles.pressable}>
                <Text>Long Tap</Text>
            </Pressable>
            <GestureDetector gesture={Gesture.Exclusive(doubleTap)}>
                <Text style={styles.pressable}>Double Tap</Text>
            </GestureDetector>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 16,
    },
    pressable: {
        padding: 8,
        backgroundColor: "lightblue",
    }
});

export default BasicTapScreen;