import { useRef } from "react"
import { Animated, PanResponder, View, Text } from "react-native"

/**
 * The swipe gesture is achievable by using the PanResponder API
 */

const SwipeScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[{ width: 100, height: 100, backgroundColor: 'lightblue' }, pan.getLayout()]}
      >
        <Text style={{ textAlign: 'center', marginTop: 35 }}>Swipe Me</Text>
      </Animated.View>
    </View>
  );
}

export default SwipeScreen;