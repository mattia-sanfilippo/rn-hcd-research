import { useMemo } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

/**
 * In React Native, you can use the Platform module to render different content based on the platform.
 * This is useful when you want to render platform-specific content or styles.
 * https://reactnative.dev/docs/platform
 */

const PlatformAdaptationScreen = () => {
    const renderPlatformSpecificContent = useMemo(() => {
        if (Platform.OS === "ios") {
            return <Text>iOS specific content</Text>;
        } else {
            return <Text>Android specific content</Text>;
        }
    }, []);

    return (
        <View style={styles.container}>
            {renderPlatformSpecificContent}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        width: 200,
        height: 100,
        backgroundColor: 'lightblue',
        ...Platform.select({
          ios: { shadowColor: '#000', shadowOpacity: 0.3 },
          android: { elevation: 5 },
        }),
      },
});

export default PlatformAdaptationScreen;