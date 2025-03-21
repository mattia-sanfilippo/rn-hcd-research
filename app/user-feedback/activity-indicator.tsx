import { ActivityIndicator, View, StyleSheet } from "react-native"

/**
 * React native provides the native iOS/Android activity indicator.
 */

const ActivityIndicatorScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default ActivityIndicatorScreen;