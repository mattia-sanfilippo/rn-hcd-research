import { useRef, useState } from "react";
import { Animated, PanResponder, View, StyleSheet, Text } from "react-native";

/**
 * Drag and drop can be implemented using PanResponder API. It's not so easy to use, 
 * but it's achievable by using the react-native framework only.
 */
const DragDropCard = ({ content }: { content: string }) => {
    const position =
        useRef(new Animated.ValueXY()).current;
    const [dragging, setDragging] = useState(false);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                setDragging(true);
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: position.x,
                        dy: position.y,
                    },
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                setDragging(false);
            },
        })
    ).current;

    return (
        <Animated.View
            style={[
                styles.card,
                {
                    transform: position.getTranslateTransform(),
                    opacity: dragging ? 0.8 : 1,
                },
            ]}
            {...panResponder.panHandlers}
        >
            <Text>{content}</Text>
        </Animated.View>
    );
};

const DragDropScreen = () => {
    return (
        <View style={styles.container}>
            <DragDropCard content="Card 1" />
            <DragDropCard content="Card 2" />
            <DragDropCard content="Card 3" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropZone: {
        position: 'absolute',
        top: 100,
        left: 100,
        width: 200,
        height: 200,
        backgroundColor: 'lightblue',
    },
    draggable: {
        width: 100,
        height: 100,
        backgroundColor: 'tomato',
    },
    card: {
        width: '90%',
        height: 100,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 5,
    }
});

export default DragDropScreen;