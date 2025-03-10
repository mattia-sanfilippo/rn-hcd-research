import { useRef } from "react";
import { Animated, View } from "react-native";
import { PinchGestureHandler } from "react-native-gesture-handler";

/**
 * Pinch to zoom can be achieved by using the react-native-gesture-handler library
 */
const PinchZoomScreen = () => {
    const scale = useRef(new Animated.Value(1)).current;

    const onPinchEvent = Animated.event([{ nativeEvent: { scale } }], { useNativeDriver: true });

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PinchGestureHandler onGestureEvent={onPinchEvent}>
            <Animated.Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 200, height: 200, transform: [{ scale }] }}
            />
        </PinchGestureHandler>
        </View>
    );
}

export default PinchZoomScreen;
